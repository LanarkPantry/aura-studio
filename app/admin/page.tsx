"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Appointment = {
  id: number;
  service_name: string;
  service_price: number;
  service_duration: number;
  appointment_time: string;
  client_name: string;
  client_email: string;
  created_at: string;
};

export default function AdminPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAppointments() {
      const { data, error } = await supabase
        .from("aura_appointments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading appointments:", error);
      } else {
        setAppointments(data || []);
      }

      setLoading(false);
    }

    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EE] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8A837D]">
            Aura Studio Admin
          </p>
          <h1 className="mt-3 font-serif text-4xl text-[#3A3A3A]">
            Appointments
          </h1>
          <p className="mt-3 text-[#6B655F]">
            A simple view of your latest bookings.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          {loading ? (
            <p className="text-[#6B655F]">Loading appointments...</p>
          ) : appointments.length === 0 ? (
            <p className="text-[#6B655F]">No bookings yet.</p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="rounded-2xl border border-[#ECE5DE] bg-[#FCFAF8] p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="font-serif text-2xl text-[#3A3A3A]">
                        {appointment.service_name}
                      </h2>
                      <p className="mt-1 text-[#6B655F]">
                        {appointment.client_name} · {appointment.client_email}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-lg font-medium text-[#3A3A3A]">
                        {appointment.appointment_time}
                      </p>
                      <p className="text-sm text-[#8A837D]">
                        £{appointment.service_price} ·{" "}
                        {appointment.service_duration} mins
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
