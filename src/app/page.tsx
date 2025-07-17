"use client";

import { supabase } from "./lib/supabaseClient";

export default function Home() {
  if (!supabase) {
    return <div>⚠️ Supabase not configured properly</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>🎉 Welcome to LuckyDraw App</h1>
    </main>
  );
}
