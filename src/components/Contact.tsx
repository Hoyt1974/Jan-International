"use client";

import { useState } from "react";

export default function Contact() {
  const [note, setNote] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // FormSubmit: first send triggers a verify email to the destination.
    const action = "https://formsubmit.co/janknightbullock@gmail.com";

    const data = new FormData(form);
    data.append("_captcha", "false");
    data.append("_template", "table");
    data.append("_subject", "Jan International — Info Request");

    try {
      const res = await fetch(action, { method: "POST", body: data, mode: "no-cors" });
      // no-cors always "opaque"; we just show success.
      setNote("Thanks! Check your email — we'll be in touch soon.");
      form.reset();
    } catch {
      setNote("Thanks! If you don’t hear back, email janknightbullock@gmail.com.");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Request More Info</h2>

        <form className="form" onSubmit={onSubmit}>
          <div className="row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
          </div>

          <label>
            <span>Message (optional)</span>
            <textarea name="message" rows={3} placeholder="Tell us what you’re looking for…" />
          </label>

          <div>
            <button type="submit">Send</button>
          </div>

          {note && <p className="note">{note}</p>}
        </form>
      </div>
    </section>
  );
}

