"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "New contact form submission:",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Subject: ${data.get("subject")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(getWhatsAppLink(message), "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact Us" }]} />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-sm text-muted-foreground">Gousul Azam Avenue, (Opposite Herfy Restaurant), House-24, Sector-13, Uttara, Dhaka-1230</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Site Offices</p>
                  <p className="text-sm text-muted-foreground">Site Office 1: Maleker Bari, Board Bazar, Joydebpur, Gazipur</p>
                  <p className="text-sm text-muted-foreground">Site Office 2: Zakia Complex, Madhobdi, Narshingdi, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+880 1713-273990</p>
                  <p className="text-sm text-muted-foreground">+88 02-55086937</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">bangladeshyonthin@gmail.com</p>
                  <p className="text-sm text-muted-foreground">aka.pse@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Sun - Thu: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">✓</div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We've opened WhatsApp with your message. Send it across and we'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Full Name</label>
                    <input name="name" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Email</label>
                    <input name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <input name="phone" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Subject</label>
                  <input name="subject" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Message</label>
                  <textarea name="message" required rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 overflow-hidden rounded-lg border border-border">
          <iframe
            src="https://www.google.com/maps?q=Gousul+Azam+Avenue,+House-24,+Sector-13,+Uttara,+Dhaka-1230,+Bangladesh&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Textile Blue Gold Head Office Location"
          />
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
