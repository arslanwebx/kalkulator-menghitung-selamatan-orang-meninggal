"use client";

import { type FormEvent, useState } from "react";

const endpoint =
  "https://formsubmit.co/ajax/halo@kalkulatorselamatanorangmeninggal.pro";

export function FooterNewsletter() {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSending(true);
    setMessage("");
    setStatus("idle");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Permintaan langganan tidak berhasil.");
      }

      form.reset();
      setStatus("success");
      setMessage("Terima kasih. Permintaan langganan berhasil dikirim.");
    } catch {
      setStatus("error");
      setMessage("Belum dapat berlangganan. Silakan coba kembali.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="footer-newsletter" onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email">Berlangganan pembaruan</label>
      <p>Dapatkan kabar fitur dan panduan terbaru melalui email.</p>
      <div className="footer-newsletter-row">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Alamat email Anda"
          aria-describedby="newsletter-status"
          required
        />
        <button type="submit" disabled={isSending}>
          {isSending ? "Mengirim…" : "Langganan"}
        </button>
      </div>
      <input
        type="hidden"
        name="_subject"
        value="Permintaan Langganan Newsletter Kalkulator Selamatan"
      />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="message"
        value="Pengunjung meminta berlangganan pembaruan Kalkulator Selamatan."
      />
      <div
        id="newsletter-status"
        className={`footer-newsletter-status ${status}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    </form>
  );
}
