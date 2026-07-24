import { useState } from "react";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.32)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Reserve your stay
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Begin your next chapter in calm luxury.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Share your preferred dates and preferences, and our team will curate
            the ideal experience for you.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            className="flex flex-col items-start justify-center gap-3 rounded-[1.5rem] border border-amber-300/30 bg-slate-950/50 p-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Inquiry sent
            </p>
            <p className="text-lg text-white">
              Thank you — your inquiry has been received. A member of our team
              will be in touch shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Send another inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={formHandler}
            className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-400 focus:border-amber-300"
                placeholder="Jordan Rivera"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Tell us about your stay
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-300"
                placeholder="Preferred dates, room type, special requests..."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contacts;
