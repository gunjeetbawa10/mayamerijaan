"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Artwork inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:sandhyagurung.art@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 md:p-8">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none ring-0 transition focus:border-foreground"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none ring-0 transition focus:border-foreground"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none ring-0 transition focus:border-foreground"
        />
      </div>
      <button
        type="submit"
        className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  );
}
