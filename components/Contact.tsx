"use client";

import { MotionSection, motion } from "@/lib/motion";
import { Mail, Linkedin, Phone, Download } from "lucide-react";
import { personalInfo, contactContent } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";

const contacts = [
  {
    label: "email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "linkedin",
    value: "jagan-m-066497185",
    href: personalInfo.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <MotionSection id="contact" className="section-padding max-w-[1100px] mx-auto">
      <h2 className="section-title">
        <span>#</span>contacts
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-lg mb-4">{contactContent.heading}</p>
          <p className="text-muted text-sm leading-relaxed mb-6">
            {contactContent.subheading}
          </p>
          <p className="text-muted text-sm mb-2">
            I&apos;m interested in freelance opportunities. However, if you
            have other request or question, don&apos;t hesitate to contact me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="box-border p-6"
        >
          <p className="text-primary text-sm mb-5">Message me here</p>
          <div className="space-y-4">
            {contacts.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 group"
              >
                <Icon size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-muted text-xs">{label}</p>
                  <p className="text-primary text-sm group-hover:text-accent transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-outline w-full justify-center mt-6"
          >
            Send message !!
          </a>
          <a
            href={assetPath(personalInfo.resumeUrl)}
            download="Jagan_M_Resume.pdf"
            className="btn-outline w-full justify-center mt-3"
          >
            <Download size={16} />
            Download resume !!
          </a>
        </motion.div>
      </div>
    </MotionSection>
  );
}
