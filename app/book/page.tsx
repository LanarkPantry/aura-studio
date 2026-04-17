"use client";

import { useState } from "react";

type Session = {
  id: string;
  title: string;
  type: "class" | "appointment";
  time: string;
  meta: string;
};

export default function BookingPage() {
  const [selected, setSelected] = useState<Session | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const sessions: Session[] = [
    {
      id: "1",
      title: "Morning Flow",
      type: "class",
      time: "Tuesday · 8:30 am",
      meta: "12 spots available",
    },
    {
      id: "2",
      title: "Pilates Foundations",
      type: "class",
      time: "Wednesday · 12:30 pm",
      meta: "10 spots available",
    },
    {
      id: "3",
      title: "Evening Restore",
      type: "class",
      time: "Thursday · 6:00 pm",
      meta: "16 spots available",
    },
    {
      id: "4",
      title: "Private Session",
      type: "appointment",
      time: "Friday · 10:00 am",
      meta: "45 mins · 1:1",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-light text-stone-900">Book a session</h1>
          <p className="mt-3 text-stone-600">
            Choose a class or private session below
          </p>
        </div>

        {!selected && (
          <div className="space-y-4">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setSelected(session)}
                className="w-full rounded-2xl border border-stone-200 bg-white p-5 text-left shadow-sm transition hover:border-stone-300 hover:bg-stone-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium text-stone-900">
                      {session.title}
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                      {session.time}
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                      {session.meta}
                    </p>
                  </div>

                  <span className="rounded-full border border-stone-200 px-3 py-1 text-xs uppercase text-stone-500">
                    {session.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {selected && !confirmed && (
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <button
              onClick={() => setSelected(null)}
              className="mb-6 text-sm text-stone-500 hover:text-stone-800"
            >
              ← Back
            </button>

            <h2 className="text-2xl font-light text-stone-900">
              {selected.title}
            </h2>

            <p className="mt-2 text-stone-600">{selected.time}</p>
            <p className="text-stone-500">{selected.meta}</p>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm focus:border-stone-500 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm focus:border-stone-500 focus:outline-none"
              />

              <button
                onClick={() => setConfirmed(true)}
                disabled={!name || !email}
                className="w-full rounded-full bg-stone-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700 disabled:opacity-40"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {confirmed && (
          <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-light text-stone-900">
              Booking confirmed
            </h2>

            <p className="mt-4 text-stone-600">
              You’re booked for <strong>{selected?.title}</strong>.
            </p>

            <p className="mt-2 text-stone-500">
              A confirmation email would be sent in a real setup.
            </p>

            <button
              onClick={() => {
                setSelected(null);
                setConfirmed(false);
                setName("");
                setEmail("");
              }}
              className="mt-6 rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-700 hover:bg-stone-100"
            >
              Book another session
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
