import { NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabaseServer";

export async function GET() {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("GET /contact error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch contact messages",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data: data }, { status: 200 });
}

export async function POST(req: Request) {
  const { name, email, message, country_value } = await req.json();

  if (!name || !email || !message || !country_value) {
    return NextResponse.json(
      {
        success: false,
        error: "Name, email, and message are required",
      },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("contact_messages")
    .insert([{ name, email, message, country_value }])
    .select()
    .single();

  if (error) {
    console.error("POST /contact error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Cannot Connect to DB",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data }, { status: 201 });
}

export async function PATCH(req: Request) {
  try {
    const { id, is_important, is_read } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Message ID is requred" },
        { status: 400 }
      );
    }

    const updateData: Record<string, boolean> = {};
    if (typeof is_important === "boolean")
      updateData.is_important = is_important;
    if (typeof is_read === "boolean") updateData.is_read = is_read;

    const { data, error } = await supabase
      .from("contact_messages")
      .update(updateData)
      .eq("ud", id)
      .select()
      .single();

    if (error) {
      console.error("PATCH /contact error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Message ID is reuqired" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("ud", id);

  if (error) {
    console.error("DELETE /contact error:", error);

    return NextResponse.json(
      { success: false, error: "Delete failed " },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
