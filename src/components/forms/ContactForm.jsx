import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const fieldClasses =
  'w-full rounded-md border border-gray-200 bg-muted px-5 py-4 text-sm outline-none transition-colors focus:border-primary';

/** A labelled field wrapper used throughout the contact form. */
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-heading">
        {label}
      </span>
      {children}
    </label>
  );
}

/**
 * Controlled contact form matching the original Dustrix "Get In Touch" layout:
 * two-column name/email, phone/subject, full-width message and a centred
 * "Get A Quote" submit. Submission is mocked (no backend).
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter Name"
            className={fieldClasses}
          />
        </Field>
        <Field label="Email Address">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter Email Address"
            className={fieldClasses}
          />
        </Field>
        <Field label="Phone Number">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter Number"
            className={fieldClasses}
          />
        </Field>
        <Field label="Subject">
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            className={fieldClasses}
          />
        </Field>
      </div>

      <Field label="Enter Message">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Enter message"
          className={fieldClasses}
        />
      </Field>

      <div className="text-center">
        <button type="submit" className="btn-primary w-full sm:w-auto sm:px-16">
          Get A Quote
        </button>
      </div>

      {submitted && (
        <p className="rounded-md bg-green-50 px-4 py-3 text-center text-sm text-green-700">
          Thank you! Your message has been sent successfully.
        </p>
      )}
    </form>
  );
}
