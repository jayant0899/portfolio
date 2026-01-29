"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { userConfig } from "@/config/user-config";
import { useIsClient } from "@/hooks/useIsClient";
import { decodeEmail } from "@/lib/utils/string";

const contactFormSchema = z.object({
  subject: z.string().min(3, "SUBJECT_MIN_3_CHARS"),
  name: z.string().min(2, "NAME_MIN_2_CHARS"),
  contact: z.string().min(5, "CONTACT_INFO_REQUIRED"),
  message: z.string().min(50, "MESSAGE_LENGTH_INSUFFICIENT (MIN 50)"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const isClient = useIsClient();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "",
      name: "",
      contact: "",
      message: "",
    },
    mode: "onBlur", // Optimized for system validation
  });

  function onSubmit(values: ContactFormValues) {
    if (!isClient) return;

    const emailDecoded = decodeEmail(userConfig.email);
    const { subject, name, contact, message } = values;

    const body = encodeURIComponent(
      `SENDER_NAME: ${name}\nSENDER_CONTACT: ${contact}\n\nMESSAGE_BODY:\n${message}`
    );

    const mailtoLink = `mailto:${emailDecoded}?subject=${encodeURIComponent(
      `[SIGNAL] ${subject}`
    )}&body=${body}`;

    window.location.href = mailtoLink;
  }

  return (
    <div className="border border-border p-6 bg-muted/5 relative font-mono">
      {/* Design Accent: Sharp Corner */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />

      <div className="mb-8">
        <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-1">
          // SIGNAL_ENCRYPTION_ACTIVE
        </p>
        <p className="text-muted-foreground text-[9px] uppercase font-bold italic">
          Standard mail protocol will be initialized upon submission.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 01: Sender Identity */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-[10px] text-primary uppercase font-bold tracking-widest">
                    01_SENDER_IDENTITY
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="NAME_OR_ORG"
                    className="border-border  rounded-none! text-WHITE_PURE focus:border-primary transition-all"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-[10px] uppercase text-red-500 font-bold"
                    />
                  )}
                </Field>
              )}
            />

            {/* 02: Return Signal */}
            <Controller
              name="contact"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-[10px] text-primary uppercase font-bold tracking-widest">
                    02_RETURN_SIGNAL
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="EMAIL_OR_PHONE"
                    className="border-border  rounded-none! text-WHITE_PURE focus:border-primary transition-all"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-[10px] uppercase text-red-500 font-bold"
                    />
                  )}
                </Field>
              )}
            />
          </div>

          {/* 03: Subject */}
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-[10px] text-primary uppercase font-bold tracking-widest">
                  03_TRANSMISSION_SUBJECT
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="PURPOSE_OF_CONTACT"
                  className="border-border  rounded-none! text-WHITE_PURE focus:border-primary transition-all"
                />
                <FieldDescription className="text-[9px] text-muted-foreground uppercase">
                  Brief summary of communication intent.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-[10px] uppercase text-red-500 font-bold"
                  />
                )}
              </Field>
            )}
          />

          {/* 04: Message Body */}
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-[10px] text-primary uppercase font-bold tracking-widest">
                  04_DATA_PAYLOAD
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="ENTER_DETAILED_MESSAGE_RECORDS..."
                  rows={6}
                  className="border-border  rounded-none! text-WHITE_PURE focus:border-primary transition-all resize-none"
                />
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-[10px] uppercase text-red-500 font-bold"
                  />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-primary text-BLACK_PURE font-bold rounded-none! uppercase tracking-[0.2em] text-xs h-12 hover:bg-WHITE_PURE transition-all group disabled:opacity-50"
        >
          <span className="group-hover:translate-x-1 transition-transform">
            {form.formState.isSubmitting
              ? "DISPATCHING..."
              : "INITIALIZE_TRANSMISSION // SEND"}
          </span>
        </Button>
      </form>
    </div>
  );
}
