import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, budget, message } = data;

    // Validate required fields
    if (!name || !email || !service || !budget) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, email, service, budget)." },
        { status: 400 }
      );
    }

    // Log the received lead on the server console for testing/monitoring
    console.log("==================================================");
    console.log("🔥 NEW LEAD RECEIVED FOR BEYONDWEBCO 🔥");
    console.log(`👤 Client Name: ${name}`);
    console.log(`✉️ Email:       ${email}`);
    console.log(`📞 Phone:       ${phone || "N/A"}`);
    console.log(`💼 Service:     ${service}`);
    console.log(`💰 Budget:      ${budget}`);
    console.log(`📝 Details:     ${message || "N/A"}`);
    console.log("==================================================");

    // If you ever want to connect a database (MongoDB, Postgres) or an email/Slack alert system,
    // this is the place to insert that integration.

    return NextResponse.json(
      { success: true, message: "Thank you! Your project inquiry has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
