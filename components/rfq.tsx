"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ButtonPrimary } from "./ui/button";
import { SectionHead } from "./ui/section-head";

const components = [
  "Bumper",
  "Fender",
  "Hood",
  "Aero / splitter",
  "Custom plug",
];

const projectTypes = [
  { id: "type-existing", value: "Existing mold" },
  { id: "type-oem", value: "Reproduction from OEM" },
  { id: "type-custom", value: "Custom prototype" },
];

const runSizes = [
  { id: "run-single", value: "Single one-off" },
  { id: "run-batch", value: "Short batch, 2-10" },
  { id: "run-team", value: "Team run" },
];

const fieldClass =
  "h-12 w-full rounded-edge border bg-inset px-3 text-[15px] text-ink placeholder:text-muted transition-colors duration-150 ease-out focus:border-accent focus:bg-surface focus:outline-none md:h-[46px]";

const labelClass =
  "block font-mono text-[12px] uppercase tracking-[0.04em] text-muted";

type Errors = Record<string, string>;

function Field({
  name,
  label,
  children,
  error,
}: {
  name: string;
  label: string;
  children: ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${name}-error`} className="mt-2 font-mono text-[12px] text-reject">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Rfq() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};

    const required: [string, string][] = [
      ["chassis", "Enter the chassis, make and model."],
      ["country", "Enter the destination country."],
      ["postal", "Enter the destination postal code."],
      ["name", "Enter a contact name."],
    ];

    for (const [key, message] of required) {
      if (!String(data.get(key) ?? "").trim()) next[key] = message;
    }

    const email = String(data.get("email") ?? "").trim();
    if (!email) {
      next.email = "Enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "This email address is not valid.";
    }

    if (data.getAll("component").length === 0) {
      next.component = "Select at least one component.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    const response = await fetch("/api/rfq", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      setStatus("idle");
      setErrors({ form: "Submission failed. Email the workshop instead." });
      return;
    }

    form.reset();
    setStatus("sent");
  };

  return (
    <section id="rfq" className="border-b border-line">
      <div className="shell py-14 md:py-24 lg:py-32">
        <SectionHead
          index="06 / Request for quotation"
          title="Request a quotation"
        />

        <div className="mt-8 max-w-[720px] rounded-edge border border-line bg-elevated px-4 py-4">
          <p className="t-body text-muted">
            Requests are read by the technicians in Toyota, Aichi and answered
            within one to two business days.
          </p>
        </div>

        {status === "sent" ? (
          <div className="mt-8 max-w-[720px] rounded-edge border border-clearance bg-elevated px-4 py-6">
            <p className="t-meta uppercase text-clearance">RFQ received</p>
            <p className="t-body mt-3 text-ink">
              Your request is in the queue. A technician will reply from the
              Aichi workshop within one to two business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 max-w-[720px]"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <Field
                  name="chassis"
                  label="Chassis / make & model *"
                  error={errors.chassis}
                >
                  <input
                    id="chassis"
                    name="chassis"
                    type="text"
                    placeholder="e.g. FR coupe, 2.0 turbo, right-hand drive"
                    aria-invalid={Boolean(errors.chassis)}
                    aria-describedby={errors.chassis ? "chassis-error" : undefined}
                    className={`${fieldClass} ${errors.chassis ? "border-reject" : "border-line"}`}
                  />
                </Field>
              </div>

              <fieldset className="md:col-span-2">
                <legend className={labelClass}>Component *</legend>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                  {components.map((item) => (
                    <label
                      key={item}
                      className="flex min-h-12 cursor-pointer items-center gap-3 font-body text-[15px] text-ink md:min-h-0"
                    >
                      <input
                        type="checkbox"
                        name="component"
                        value={item}
                        className="control"
                      />
                      {item}
                    </label>
                  ))}
                </div>
                {errors.component ? (
                  <p className="mt-2 font-mono text-[12px] text-reject">
                    {errors.component}
                  </p>
                ) : null}
              </fieldset>

              <fieldset>
                <legend className={labelClass}>Project type</legend>
                <div className="mt-3 flex flex-col gap-3">
                  {projectTypes.map((option, i) => (
                    <label
                      key={option.id}
                      className="flex min-h-12 cursor-pointer items-center gap-3 font-body text-[15px] text-ink md:min-h-0"
                    >
                      <input
                        id={option.id}
                        type="radio"
                        name="projectType"
                        value={option.value}
                        defaultChecked={i === 0}
                        className="control"
                      />
                      {option.value}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>Run size</legend>
                <div className="mt-3 flex flex-col gap-3">
                  {runSizes.map((option, i) => (
                    <label
                      key={option.id}
                      className="flex min-h-12 cursor-pointer items-center gap-3 font-body text-[15px] text-ink md:min-h-0"
                    >
                      <input
                        id={option.id}
                        type="radio"
                        name="runSize"
                        value={option.value}
                        defaultChecked={i === 0}
                        className="control"
                      />
                      {option.value}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field
                name="country"
                label="Destination country *"
                error={errors.country}
              >
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country-name"
                  placeholder="Country of delivery"
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={errors.country ? "country-error" : undefined}
                  className={`${fieldClass} ${errors.country ? "border-reject" : "border-line"}`}
                />
              </Field>

              <Field name="postal" label="Postal code *" error={errors.postal}>
                <input
                  id="postal"
                  name="postal"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="For freight estimate"
                  aria-invalid={Boolean(errors.postal)}
                  aria-describedby={errors.postal ? "postal-error" : undefined}
                  className={`${fieldClass} ${errors.postal ? "border-reject" : "border-line"}`}
                />
              </Field>

              <div className="md:col-span-2">
                <Field name="reference" label="Reference data link">
                  <input
                    id="reference"
                    name="reference"
                    type="text"
                    placeholder="Link to 3D scan, photos or drawings"
                    className={`${fieldClass} border-line`}
                  />
                </Field>
              </div>

              <Field name="name" label="Contact name *" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`${fieldClass} ${errors.name ? "border-reject" : "border-line"}`}
                />
              </Field>

              <Field name="email" label="Email address *" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`${fieldClass} ${errors.email ? "border-reject" : "border-line"}`}
                />
              </Field>

              <div className="md:col-span-2">
                <Field name="notes" label="Project notes">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={5}
                    placeholder="Mounting requirements, gaps, reinforcement, deadlines"
                    className="w-full rounded-edge border border-line bg-inset px-3 py-3 text-[15px] text-ink placeholder:text-muted transition-colors duration-150 ease-out focus:border-accent focus:bg-surface focus:outline-none"
                  />
                </Field>
              </div>
            </div>

            {errors.form ? (
              <p className="mt-6 font-mono text-[12px] text-reject">
                {errors.form}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <ButtonPrimary type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? "Sending..."
                  : "Submit RFQ to Aichi Workshop"}
              </ButtonPrimary>
              <p className="t-meta uppercase text-muted">Fields marked * required</p>
            </div>

            <p className="t-body measure mt-8 text-muted">
              Panels leave the workshop in timber-reinforced crates. Overseas
              requests are answered in English, with crate dimensions and weight
              stated before any freight is booked.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
