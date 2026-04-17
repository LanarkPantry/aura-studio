"use client";

import { useMemo, useState } from "react";

type Session = {
  id: string;
  title: string;
  type: "class" | "appointment";
  day: string;
  date: string;
  time: string;
  duration?: string;
  teacher?: string;
  spots?: string;
  description: string;
};

const sessions: Session[] = [
  {
    id: "1",
    title: "Morning Flow",
    type: "class",
    day: "Tuesday",
    date: "21 April",
    time: "8:30 am",
    teacher: "Emma",
    spots: "12 spots available",
    description:
      "A gentle morning class to build warmth, movement, and focus for the day ahead.",
  },
  {
    id: "2",
    title: "Pilates Foundations",
    type: "class",
    day: "Wednesday",
    date: "22 April",
    time: "12:30 pm",
    teacher: "Lara",
    spots: "10 spots available",
    description:
      "A steady, supportive class focused on core strength, mobility, and alignment.",
  },
  {
    id: "3",
    title: "Evening Restore",
    type: "class",
    day: "Thursday",
    date: "23 April",
    time: "6:00 pm",
    teacher: "Sophie",
    spots: "16 spots available",
    description:
      "Slow, grounding movement and deep rest to help you unwind at the end of the day.",
  },
  {
    id: "4",
    title: "Private Session",
    type: "appointment",
    day: "Friday",
    date: "24 April",
    time: "10:00 am",
    duration: "45 mins",
    teacher: "Emma",
    description:
      "A one-to-one session tailored to your needs, with space for guidance, support, and focus.",
  },
];

export default function BookingPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedSession = useMemo(
    () => sessions.find((session) => session.id === selectedId) ?? null,
    [selectedId],
  );

  const resetBooking = () => {
    setSelectedId(null);
    setName("");
    setEmail("");
    setConfirmed(false);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F1] text-[#2E2A26]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-100px] top-[-60px] h-[280px] w-[280px] rounded-full bg-[#E8DDD0] blur-3xl opacity-60" />
        <div className="absolute right-[-80px] top-[140px] h-[260px] w-[260px] rounded-full bg-[#DDE3D6] blur-3xl opacity-60" />
        <div className="absolute bottom-[-80px] left-[20%] h-[220px] w-[220px] rounded-full bg-[#EADFD6] blur-3xl opacity-50" />
      </div>

      <header className="border-b border-[#E7DED4]/80 bg-[#F8F5F1]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CDC1] bg-white text-sm font-medium text-[#55624A] shadow-sm">
              A
            </div>
            <div>
              <p className="font-serif text-2xl leading-none tracking-tight text-[#2E2A26]">
                Aura Studio
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#7B7269]">
                Demo booking
              </p>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-[#DDD4C8] bg-white px-4 py-2.5 text-sm text-[#5F574F] shadow-sm transition hover:border-[#D0C4B6] hover:bg-[#FCFAF7]"
          >
            Back to home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDD3C8] bg-white/90 px-4 py-2 text-sm text-[#6A625A] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#A88163]" />
            Client booking experience
          </div>

          <h1 className="font-serif text-5xl tracking-tight text-[#2E2A26] md:text-6xl">
            Book a class or private session
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#665E56]">
            Explore a calm, client-friendly booking flow designed for modern
            studios and practices.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="rounded-[32px] border border-[#E4D8CB] bg-[linear-gradient(180deg,#FFFDFC_0%,#F7F1EB_100%)] p-4 shadow-[0_22px_60px_rgba(46,42,38,0.08)]">
              <div className="mb-4 flex items-center justify-between px-2 pt-1">
                <div>
                  <p className="text-sm text-[#7C736A]">Available sessions</p>
                  <h2 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                    This week
                  </h2>
                </div>
                <div className="rounded-full border border-[#E5DBD0] bg-[#FCFAF7] px-4 py-2 text-sm text-[#6C645C]">
                  April 2026
                </div>
              </div>

              <div className="space-y-3">
                {sessions.map((session) => {
                  const isSelected = selectedId === session.id;
                  const isClass = session.type === "class";

                  return (
                    <button
                      key={session.id}
                      onClick={() => {
                        setSelectedId(session.id);
                        setConfirmed(false);
                      }}
                      className={`w-full rounded-[24px] border p-5 text-left shadow-sm transition ${
                        isSelected
                          ? "border-[#BBA590] bg-[#FFF8F2] ring-1 ring-[#D7C3B2]"
                          : "border-[#E8DED3] bg-[#FFFEFD] hover:border-[#D8CABA] hover:bg-[#FCFAF7]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-[#F3ECE5] px-3 py-1 text-xs font-medium text-[#6C645C]">
                              {session.day}
                            </span>
                            <span className="text-sm text-[#8A8178]">
                              {session.date}
                            </span>
                          </div>

                          <h3 className="text-xl font-medium text-[#2E2A26]">
                            {session.title}
                          </h3>

                          <p className="mt-1 text-sm text-[#665E56]">
                            {session.time}
                            {isClass
                              ? ` · ${session.teacher}`
                              : ` · ${session.duration} · ${session.teacher}`}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-[#7A7168]">
                            {session.description}
                          </p>

                          <p className="mt-3 text-sm text-[#7C736A]">
                            {isClass ? session.spots : "One-to-one booking"}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                            isClass
                              ? "bg-[#DDE3D6] text-[#55624A]"
                              : "bg-[#EADFD6] text-[#8B6548]"
                          }`}
                        >
                          {isClass ? "Class" : "Appointment"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-6 rounded-[32px] border border-[#E4D8CB] bg-white p-6 shadow-[0_22px_60px_rgba(46,42,38,0.08)]">
              {!selectedSession && (
                <div className="flex min-h-[420px] flex-col justify-center rounded-[24px] border border-dashed border-[#DCCFC1] bg-[#FCFAF7] p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F1E8DF] text-[#7B6A5A]">
                    ✦
                  </div>
                  <h3 className="font-serif text-3xl tracking-tight text-[#2E2A26]">
                    Select a session
                  </h3>
                  <p className="mx-auto mt-4 max-w-sm leading-7 text-[#665E56]">
                    Choose a class or appointment to view the booking details
                    and complete the demo flow.
                  </p>
                </div>
              )}

              {selectedSession && !confirmed && (
                <div>
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#7C736A]">Booking details</p>
                      <h3 className="mt-1 font-serif text-3xl tracking-tight text-[#2E2A26]">
                        {selectedSession.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedId(null);
                        setName("");
                        setEmail("");
                        setConfirmed(false);
                      }}
                      className="rounded-full border border-[#E1D6CA] bg-[#FCFAF7] px-3 py-1.5 text-xs font-medium text-[#6A625A] transition hover:bg-white"
                    >
                      Clear
                    </button>
                  </div>

                  <div className="rounded-[24px] border border-[#E8DED3] bg-[#FCFAF7] p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8B8177]">
                          Date
                        </p>
                        <p className="mt-2 text-sm text-[#2E2A26]">
                          {selectedSession.day}, {selectedSession.date}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8B8177]">
                          Time
                        </p>
                        <p className="mt-2 text-sm text-[#2E2A26]">
                          {selectedSession.time}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8B8177]">
                          Type
                        </p>
                        <p className="mt-2 text-sm text-[#2E2A26] capitalize">
                          {selectedSession.type}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8B8177]">
                          Details
                        </p>
                        <p className="mt-2 text-sm text-[#2E2A26]">
                          {selectedSession.type === "class"
                            ? selectedSession.spots
                            : selectedSession.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-[#514A43]">
                      Your name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-[#D9CDC1] bg-[#FFFEFD] px-4 py-3.5 text-sm text-[#2E2A26] outline-none transition placeholder:text-[#9A9086] focus:border-[#BBA590] focus:ring-2 focus:ring-[#EADFD6]"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 block text-sm font-medium text-[#514A43]">
                      Your email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-[#D9CDC1] bg-[#FFFEFD] px-4 py-3.5 text-sm text-[#2E2A26] outline-none transition placeholder:text-[#9A9086] focus:border-[#BBA590] focus:ring-2 focus:ring-[#EADFD6]"
                    />
                  </div>

                  <button
                    onClick={() => setConfirmed(true)}
                    disabled={!name || !email}
                    className="mt-6 w-full rounded-full bg-[#55624A] px-6 py-4 text-sm font-medium text-white shadow-[0_16px_32px_rgba(85,98,74,0.18)] transition hover:bg-[#4A5640] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Confirm booking
                  </button>

                  <p className="mt-4 text-center text-xs leading-6 text-[#8A8178]">
                    Demo only — this page does not save a real booking yet.
                  </p>
                </div>
              )}

              {selectedSession && confirmed && (
                <div className="flex min-h-[420px] flex-col justify-center rounded-[24px] bg-[linear-gradient(180deg,#FFFDFC_0%,#F6F0E8_100%)] p-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE3D6] text-2xl text-[#55624A]">
                    ✓
                  </div>

                  <p className="text-sm uppercase tracking-[0.22em] text-[#7B7269]">
                    Booking confirmed
                  </p>

                  <h3 className="mt-3 font-serif text-4xl tracking-tight text-[#2E2A26]">
                    You&apos;re all set
                  </h3>

                  <p className="mx-auto mt-4 max-w-md leading-8 text-[#665E56]">
                    You&apos;re booked for{" "}
                    <span className="font-medium text-[#2E2A26]">
                      {selectedSession.title}
                    </span>{" "}
                    on {selectedSession.day}, {selectedSession.date} at{" "}
                    {selectedSession.time}.
                  </p>

                  <div className="mx-auto mt-6 max-w-md rounded-[24px] border border-[#E5DBCF] bg-white/80 p-4 text-sm text-[#6C645C]">
                    In the real product, a confirmation email and reminder would
                    be sent automatically.
                  </div>

                  <button
                    onClick={resetBooking}
                    className="mt-8 inline-flex self-center rounded-full border border-[#D8CDC1] bg-white px-6 py-3.5 text-sm font-medium text-[#514A43] shadow-sm transition hover:bg-[#FCFAF7]"
                  >
                    Book another session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
