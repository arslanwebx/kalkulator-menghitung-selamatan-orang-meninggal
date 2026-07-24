"use client";

import { type FormEvent, useState } from "react";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const endpoint =
  "https://formsubmit.co/ajax/halo@kalkulatorselamatanorangmeninggal.pro";

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Permintaan tidak berhasil.");
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Terima kasih. Pesan Anda berhasil dikirim dan akan kami balas secepatnya.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Maaf, pesan belum dapat dikirim. Silakan coba lagi atau kirim email langsung kepada kami.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <div className="contact-form-group">
          <label htmlFor="contact-name">Nama Lengkap</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="Masukkan nama lengkap Anda"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="contact-email">Alamat Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            placeholder="nama@email.com"
            autoComplete="email"
            maxLength={160}
            required
          />
        </div>
      </div>

      <div className="contact-form-group">
        <label htmlFor="contact-message">Pesan Anda</label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          placeholder="Tuliskan pertanyaan, koreksi, atau masukan Anda"
          maxLength={3000}
          required
        />
        <p className="contact-field-help">Maksimal 3.000 karakter.</p>
      </div>

      <input
        type="hidden"
        name="_subject"
        value="Pesan Baru dari Kalkulator Selamatan"
      />
      <input type="hidden" name="_template" value="table" />

      <button
        type="submit"
        className="button button-primary contact-submit"
        disabled={isSending}
        aria-describedby="contact-form-status"
      >
        {isSending ? "Sedang Mengirim…" : "Kirim Pesan"}
      </button>

      <div
        id="contact-form-status"
        className={`contact-form-status ${
          status.type === "idle" ? "" : status.type
        }`}
        role="status"
        aria-live="polite"
      >
        {status.message}
      </div>
    </form>
  );
}
