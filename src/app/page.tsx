"use client";

import { useState } from "react";
import { supabase } from "./lib/supabaseClient";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const buyTicket = async () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    const userId = "user_" + Math.random().toString(36).substring(2, 10); // 👈 For now random user
    const ticketCount = 1;
    const amount = 1; // $1 per ticket

    const { error } = await supabase.from("tickets").insert([
      {
        user_id: userId,
        date: new Date().toISOString(),
        ticket_count: ticketCount,
        amount: amount,
      },
    ]);

    if (error) {
      console.error("❌ Error buying ticket:", error);
      setError("Something went wrong. Try again!");
    } else {
      console.log("✅ Ticket purchased!");
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Welcome to LuckyDraw 🎟️</h1>
      <button
        onClick={buyTicket}
        disabled={loading}
        style={{
          background: loading ? "#999" : "#0070f3",
          color: "#fff",
          padding: "15px 30px",
          fontSize: "18px",
          border: "none",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Processing..." : "Buy Ticket 🎫 ($1)"}
      </button>

      {success && <p style={{ color: "green", marginTop: "20px" }}>✅ Ticket purchased successfully!</p>}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
    </main>
  );
}
