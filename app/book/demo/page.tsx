"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

const services = [
  { id: 1, name: "Cut & Finish", price: 35, duration: 45 },
  { id: 2, name: "Colour", price: 80, duration: 120 },
  { id: 3, name: "Skin Treatment", price: 60, duration: 60 },
];

const timeSlots = ["10:00", "11:00", "14:00", "15:30"];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = selectedService && selectedTime && name && email;

  async function handleSubmit() {
    if (!selectedService || !selectedTime || !name || !email) return;

    setLoading(true);
    setError("");

    const { error } = await supabase.from("aura_appointments").insert([
      {
        service_name: selectedService.name,
        service_price: selectedService.price,
        service_duration: selectedService.duration,
        appointment_time: selectedTime,
        client_name: name,
        client_email: email,
      },
    ]);

    setLoading(false);

    if (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    setSubmitted(true);
  }

  if (submitted && selectedService && selectedTime) {
    return (
      <div className="min-h-screen bg-[#F5F2EE] px-6 py-16">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="font-serif text-3xl text-[#3A3A3A]">
            You’re booked ✨
          </h1>
          <p className="mt-4 text-[#6B655F]">
            Your appointment has been requested successfully.
          </p>

          <div className="mt-8 space-y-3 rounded-2xl bg-[#FAF7F3] p-5 text-[#4D4945]">
            <p>
              <span className="font-medium">Service:</span>{" "}
              {selectedService.name}
            </p>
            <p>
              <span className="font-medium">Time:</span> {selectedTime}
            </p>
            <p>
              <span className="font-medium">Name:</span> {name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {email}
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedService(null);
              setSelectedTime(null);
              setName("");
              setEmail("");
              setSubmitted(false);
              setError("");
            }}
            className="mt-8 rounded-full bg-[#3F4A43] px-6 py-3 text-white"
          >
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EE] px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8A837D]">
            Aura Studio Demo
          </p>
          <h1 className="mt-3 font-serif text-4xl text-[#3A3A3A]">
            Book an appointment
          </h1>
          <p className="mt-3 text-[#6B655F]">
            A calm, simple booking flow for salons and aesthetics businesses.
          </p>
        </div>

        <div className="mb-10 flex gap-2 text-sm">
          <div className="rounded-full bg-white px-4 py-2 text-[#3A3A3A] shadow-sm">
            1. Service
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-[#3A3A3A] shadow-sm">
            2. Time
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-[#3A3A3A] shadow-sm">
            3. Details
          </div>
        </div>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#3A3A3A]">
            Choose a service
          </h2>
          <div className="mt-5 space-y-4">
            {services.map((service) => {
              const active = selectedService?.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-[#3F4A43] bg-[#F7F3EE]"
                      : "border-[#ECE5DE] bg-white hover:bg-[#FBF8F4]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#3A3A3A]">
                      {service.name}
                    </span>
                    <span className="text-[#6B655F]">£{service.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#8A837D]">
                    {service.duration} mins
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {selectedService && (
          <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-[#3A3A3A]">
              Choose a time
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {timeSlots.map((slot) => {
                const active = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`rounded-2xl border px-4 py-3 transition ${
                      active
                        ? "border-[#3F4A43] bg-[#F7F3EE] text-[#3A3A3A]"
                        : "border-[#ECE5DE] bg-white text-[#5E5A56] hover:bg-[#FBF8F4]"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {selectedService && selectedTime && (
          <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-[#3A3A3A]">Your details</h2>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-[#6B655F]">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8E1DA] bg-[#FCFAF8] px-4 py-3 outline-none focus:border-[#3F4A43]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#6B655F]">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-[#E8E1DA] bg-[#FCFAF8] px-4 py-3 outline-none focus:border-[#3F4A43]"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            <button
              disabled={!canSubmit || loading}
              onClick={handleSubmit}
              className={`mt-6 rounded-full px-6 py-3 text-white transition ${
                canSubmit && !loading
                  ? "bg-[#3F4A43] hover:opacity-95"
                  : "cursor-not-allowed bg-[#A8AEA9]"
              }`}
            >
              {loading ? "Saving..." : "Confirm booking"}
            </button>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </section>
        )}
      </div>
    </div>
  );
}
