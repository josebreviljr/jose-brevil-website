
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormRequest = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Send email to site owner
    const emailToOwner = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["info@josebrevil.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to the sender
    const emailToSender = await resend.emails.send({
      from: "Jose F. Brevil, Jr. <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your message",
      html: `
        <h2>Thank you for contacting Jose F. Brevil, Jr.</h2>
        <p>I have received your message and will get back to you soon.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Jose F. Brevil, Jr.</p>
      `,
    });

    console.log("Emails sent successfully:", { 
      toOwner: emailToOwner, 
      toSender: emailToSender 
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
