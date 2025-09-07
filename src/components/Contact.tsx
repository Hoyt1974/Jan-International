"use client";

import { useState } from "react";

export default function Contact() {
  const [note, setNote] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote("Thank you! We'll be in touch soon.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Request More Info</h2>
        <form onSubmit={onSubmit} className="form">
          <label className="field">
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <button type="submit" className="btn">Send</button>
          <p className="note" aria-live="polite">{note}</p>
        </form>
      </div>
    </section>
  );
}

