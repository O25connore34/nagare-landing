import { NextResponse } from "next/server";

const requiredFields = ["chassis", "country", "postal", "name", "email"];

export async function POST(request: Request) {
  const data = await request.formData();

  const missing = requiredFields.filter(
    (field) => !String(data.get(field) ?? "").trim(),
  );

  if (missing.length > 0 || data.getAll("component").length === 0) {
    return NextResponse.json({ ok: false, missing }, { status: 400 });
  }

  // Delivery is not wired up: connect an inbox or CRM before going live.
  console.info("RFQ received", Object.fromEntries(data.entries()));

  return NextResponse.json({ ok: true });
}
