"use client";

import React from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/portfolio-data";

const ContactCTA = () => {
  const { email, phone, location, linkedin, github } = profileData.contact;

  const details = [
    { k: "Email", v: email, href: `mailto:${email}` },
    { k: "Phone", v: phone },
    { k: "Location", v: location.split(",").slice(-2).join(",").trim() || "Bangkok, TH" },
    { k: "Status", v: "Available for full-time" },
  ];

  return (
    <section id="contact" className="border-t border-rule bg-ground py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="rounded-md border border-rule-2 bg-paper p-8 md:p-12">
          <p className="tech-label">Sheet 04 — Contact</p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-ink text-balance">
                Open to full-time roles. Let&apos;s talk.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-2">
                If you&apos;re hiring for ERP, full-stack, or mobile work, I&apos;m happy to walk you through any
                of these projects.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-sm bg-accent-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
                >
                  <Mail size={17} strokeWidth={2.25} />
                  Email me
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={`https://${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-rule-2 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-3 hover:bg-paper-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={`https://${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-rule-2 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-3 hover:bg-paper-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            {/* contact title block */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              {details.map((d) => (
                <div key={d.k} className={d.k === "Email" ? "col-span-2" : undefined}>
                  <dt className="tech-label text-[0.625rem]">{d.k}</dt>
                  <dd className="mt-1 break-words font-mono text-sm text-ink-2">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-accent-ink">
                        {d.v}
                      </a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
