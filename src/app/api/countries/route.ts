import { NextResponse } from "next/server"
import { supabase } from "@/src/lib/supabaseServer"

export async function GET() {
  const { data, error } = await supabase
    .from("countries")
    .select("*");

  if (error) {
    return NextResponse.json([], { status:500 });
  }

  return NextResponse.json(data);
}
