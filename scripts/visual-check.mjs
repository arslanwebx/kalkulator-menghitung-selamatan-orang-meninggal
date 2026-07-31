import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const edgePath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const port = 9237;
const root = process.cwd();
const profile = path.join(root, ".edge-visual-check");
const siteUrl = "http://127.0.0.1:4173/";

const browser = spawn(
  edgePath,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    siteUrl,
  ],
  { stdio: "ignore", windowsHide: true },
);

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getDebugTarget() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === "page");
      if (page) return page;
    } catch {
      // Edge may still be starting.
    }
    await wait(200);
  }
  throw new Error("Could not connect to the Edge debugging endpoint.");
}

const target = await getDebugTarget();
const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
let messageId = 0;

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  const handler = pending.get(message.id);
  if (!handler) return;
  pending.delete(message.id);
  if (message.error) handler.reject(new Error(message.error.message));
  else handler.resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

function send(method, params = {}) {
  const id = (messageId += 1);
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function capture(width, height, filename, url = siteUrl) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: true,
    screenWidth: width,
    screenHeight: height,
  });
  await send("Page.navigate", { url });
  await wait(800);
  const metrics = await send("Runtime.evaluate", {
    expression:
      "JSON.stringify({innerWidth,scrollWidth:document.documentElement.scrollWidth})",
    returnByValue: true,
  });
  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await writeFile(path.join(root, filename), screenshot.data, "base64");
  return metrics.result.value;
}

try {
  await send("Page.enable");
  for (const width of [320, 375, 768, 1440]) {
    const height = width === 1440 ? 1500 : 1800;
    const metrics = await capture(
      width,
      height,
      `visual-${width}.png`,
    );
    process.stdout.write(`${width}px ${metrics}\n`);
  }

  for (const page of [
    { slug: "contact", url: `${siteUrl}hubungi-kami/` },
    { slug: "about", url: `${siteUrl}tentang-kami/` },
    { slug: "author", url: `${siteUrl}penulis/rizky-pratama/` },
    { slug: "sitemap", url: `${siteUrl}peta-situs/` },
    {
      slug: "table-reference",
      url: `${siteUrl}tabel-hitungan-orang-meninggal/`,
    },
  ]) {
    for (const width of [375, 1440]) {
      const height = width === 1440 ? 1900 : 3000;
      const metrics = await capture(
        width,
        height,
        `visual-${page.slug}-${width}.png`,
        page.url,
      );
      process.stdout.write(`${page.slug} ${width}px ${metrics}\n`);
    }
  }

  await send("Emulation.setDeviceMetricsOverride", {
    width: 375,
    height: 900,
    deviceScaleFactor: 1,
    mobile: true,
    screenWidth: 375,
    screenHeight: 900,
  });
  await send("Page.navigate", { url: `${siteUrl}hubungi-kami/` });
  await wait(800);
  await send("Runtime.evaluate", {
    expression: `(() => {
      window.__contactFetchCalls = 0;
      window.fetch = () => {
        window.__contactFetchCalls += 1;
        return new Promise((resolve) => setTimeout(() => resolve({
          ok: true,
          json: async () => ({ success: true })
        }), 250));
      };
      const form = document.querySelector('.contact-form');
      form.querySelector('[name="name"]').value = 'Pengguna Uji';
      form.querySelector('[name="email"]').value = 'uji@example.com';
      form.querySelector('[name="message"]').value = 'Pesan pengujian formulir.';
      form.requestSubmit();
    })()`,
  });
  await wait(80);
  const ajaxLoading = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      path: location.pathname,
      fetchCalls: window.__contactFetchCalls,
      disabled: document.querySelector('.contact-form button[type="submit"]').disabled,
      buttonText: document.querySelector('.contact-form button[type="submit"]').textContent.trim()
    })`,
    returnByValue: true,
  });
  await wait(420);
  const ajaxFinish = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      path: location.pathname,
      fetchCalls: window.__contactFetchCalls,
      disabled: document.querySelector('.contact-form button[type="submit"]').disabled,
      status: document.querySelector('#contact-form-status').textContent.trim(),
      nameAfterSuccess: document.querySelector('[name="name"]').value
    })`,
    returnByValue: true,
  });
  process.stdout.write(`contact ajax loading ${ajaxLoading.result.value}\n`);
  process.stdout.write(`contact ajax finish ${ajaxFinish.result.value}\n`);

  await send("Runtime.evaluate", {
    expression: `(() => {
      const form = document.querySelector('.footer-newsletter');
      form.querySelector('[name="email"]').value = 'langganan@example.com';
      form.requestSubmit();
    })()`,
  });
  await wait(80);
  const newsletterLoading = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      disabled: document.querySelector('.footer-newsletter button').disabled,
      buttonText: document.querySelector('.footer-newsletter button').textContent.trim()
    })`,
    returnByValue: true,
  });
  await wait(420);
  const newsletterFinish = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      disabled: document.querySelector('.footer-newsletter button').disabled,
      status: document.querySelector('#newsletter-status').textContent.trim(),
      emailAfterSuccess: document.querySelector('#newsletter-email').value
    })`,
    returnByValue: true,
  });
  process.stdout.write(
    `newsletter ajax loading ${newsletterLoading.result.value}\n`,
  );
  process.stdout.write(
    `newsletter ajax finish ${newsletterFinish.result.value}\n`,
  );

  await send("Emulation.setDeviceMetricsOverride", {
    width: 375,
    height: 1800,
    deviceScaleFactor: 1,
    mobile: true,
    screenWidth: 375,
    screenHeight: 1800,
  });
  await send("Page.navigate", { url: siteUrl });
  await wait(800);
  await send("Runtime.evaluate", {
    expression: `(() => {
      const input = document.querySelector('#death-date');
      const setter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
      ).set;
      setter.call(input, '1945-08-17');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      document.querySelector('form').requestSubmit();
    })()`,
  });
  await wait(1000);
  const resultScreenshot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await writeFile(
    path.join(root, "visual-result-375.png"),
    resultScreenshot.data,
    "base64",
  );
} finally {
  socket.close();
  browser.kill();
}
