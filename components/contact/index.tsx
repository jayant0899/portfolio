"use client";

import { userConfig } from "@/config/user-config";
import { useIsClient } from "@/hooks/useIsClient";
import { decodeEmail, decodePhoneNumber } from "@/lib/utils/string";
import { SectionMotionWrapper } from "../motion/SectionMotionWrapper";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  const referenceProtocol = "CONTACT_INTERFACE_NODE";
  const isClient = useIsClient();

  // Handle decoding only when the client is active to prevent hydration errors
  const emailDecoded = isClient
    ? decodeEmail(userConfig.email)
    : "ENCRYPTED_SIGNAL";

  const phoneNumberDecoded = isClient
    ? decodePhoneNumber(userConfig.phoneNumber)
    : "ENCRYPTED_SIGNAL";

  return (
    <section
      id="contact"
      className="w-full py-24 px-4  border-b border-border font-mono overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="lg:col-span-5 space-y-8 mb-20">
          <div className="space-y-2">
            <h2 className="text-primary text-xl font-bold tracking-[0.3em] uppercase">
              08. Contact_Inquiry
            </h2>
            <div className="h-px w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              REF_ID:{" "}
              <span className="text-secondary-foreground font-bold">
                {referenceProtocol}
              </span>
            </span>
          </div>
        </div>

        <SectionMotionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Message Input */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 mb-8">
                <h3 className="text-WHITE_PURE text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                  Establish <span className="text-primary">Connection</span>.
                </h3>
                <p className="text-muted-foreground text-xs uppercase font-bold tracking-widest max-w-md italic">
                  Complete the professional inquiry form below to initiate
                  communication.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right: Channels & Status */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                  // DIRECT_CHANNELS
                </p>

                <div className="flex flex-col gap-3">
                  {/* Email Channel */}
                  <a
                    href={isClient ? `mailto:${emailDecoded}` : "#"}
                    className="group flex justify-between items-center border border-border p-4 bg-muted/5 hover:border-primary/30 transition-all rounded-none!"
                  >
                    <div className="space-y-1">
                      <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">
                        Channel_01
                      </span>
                      <p className="text-WHITE_PURE text-xs font-bold lowercase group-hover:text-primary">
                        {isClient ? emailDecoded : "Professional_Email"}
                      </p>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase">
                      {isClient ? "SECURE" : "LOCKED"}
                    </div>
                  </a>

                  {/* Phone Channel */}
                  <a
                    href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
                    className="group flex justify-between items-center border border-border p-4 bg-muted/5 hover:border-primary/30 transition-all rounded-none!"
                  >
                    <div className="space-y-1">
                      <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">
                        Channel_02
                      </span>
                      <p className="text-WHITE_PURE text-xs font-bold uppercase group-hover:text-primary">
                        {isClient ? phoneNumberDecoded : "Secure_Voice_Line"}
                      </p>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase">
                      {isClient ? "SECURE" : "LOCKED"}
                    </div>
                  </a>

                  {/* LinkedIn Channel */}
                  <a
                    href={userConfig.linkedin}
                    target="_blank"
                    className="group flex justify-between items-center border border-border p-4 bg-muted/5 hover:border-primary/30 transition-all rounded-none!"
                  >
                    <div className="space-y-1">
                      <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">
                        Channel_03
                      </span>
                      <p className="text-WHITE_PURE text-xs font-bold uppercase group-hover:text-primary">
                        LinkedIn_Profile
                      </p>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-bold">
                      READY
                    </div>
                  </a>

                  {/* Calendar Channel */}
                  <a
                    href={userConfig.calendarBookingUrl}
                    target="_blank"
                    className="group flex justify-between items-center border border-border p-4 bg-muted/5 border-l-2 border-l-primary hover:bg-primary/5 transition-all rounded-none!"
                  >
                    <div className="space-y-1">
                      <span className="text-[8px] text-primary font-bold uppercase tracking-widest">
                        Channel_04
                      </span>
                      <p className="text-WHITE_PURE text-xs font-bold uppercase group-hover:text-primary">
                        Schedule_Meeting
                      </p>
                    </div>
                    <div className="text-[10px] text-primary animate-pulse font-bold tracking-tighter">
                      OPEN_SLOTS
                    </div>
                  </a>
                </div>
              </div>

              {/* Metadata Terminal */}
              <div className="bg-muted/5 border border-border p-6 relative rounded-none!">
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                  // CONTACT_METADATA
                </p>

                <div className="space-y-4">
                  {[
                    {
                      label: "GITHUB",
                      val: "REPOSITORIES",
                      url: userConfig.github,
                    },
                    {
                      label: "TWITTER",
                      val: "SOCIAL_FEED",
                      url: userConfig.twitter,
                    },
                    { label: "LOCATION", val: userConfig.address, url: "#" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col border-b border-border/50 pb-3 group"
                    >
                      <span className="text-muted-foreground text-[8px] font-bold tracking-widest uppercase mb-1">
                        {item.label}
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-WHITE_PURE text-xs font-bold uppercase hover:text-primary transition-colors"
                      >
                        {item.val}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-muted-foreground text-[9px] font-bold uppercase leading-relaxed italic">
                    Base: {userConfig.address} <br />
                    Timezone: {userConfig.timeZone} <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionMotionWrapper>
      </div>
    </section>
  );
}
