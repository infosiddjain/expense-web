import Link from "next/link";
import type { Metadata } from "next";
import { FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Expense Tracker",
  description: "Review the Terms and Conditions governing the use of Expense web and mobile applications.",
};

export default function TermsPage() {
  const termsList = [
    {
      num: "1",
      title: "Acceptance of Terms",
      text: "By downloading, accessing, or using the Expense mobile application or web application provided by Siddharth Jain (Siddharth Gauri on Google Play), you agree to comply with and be bound by these Terms and Conditions.",
    },
    {
      num: "2",
      title: "Software License & Personal Use",
      text: "Expense grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the application strictly for your personal financial tracking, multi-dashboard budget planning, and ledger management.",
    },
    {
      num: "3",
      title: "User Data Responsibility & Device Hygiene",
      text: "Expense operates on a 100% offline-first model. You acknowledge and agree that you are solely responsible for safeguarding your device, maintaining local data backups, and protecting your device against loss or data clearing.",
    },
    {
      num: "4",
      title: "Intellectual Property Rights",
      text: "All content, code, graphics, branding, Midnight Emerald design elements, typography, logos, and features in Expense are owned by Siddharth Jain and protected by copyright, trademark, and international intellectual property laws.",
    },
    {
      num: "5",
      title: "Disclaimer of Financial Advice & Liability",
      text: "Expense is designed solely as an informational budget tracking tool. It does not provide certified financial, accounting, tax, or legal advice. The software is provided 'AS IS' without warranties of any kind.",
    },
    {
      num: "6",
      title: "Modifications to Terms & Software",
      text: "We reserve the right to update or modify these terms at any time. Continued use of the software after updates constitutes acceptance of the modified Terms and Conditions.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          Terms of Service
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms & <span className="text-gradient-emerald">Conditions</span>
        </h1>
        <p className="text-sm text-[#A7B3AF]">Effective Date: August 31, 2026</p>
      </div>

      {/* Intro Box */}
      <div className="glass-card rounded-3xl p-8 border border-[#27312E] space-y-3">
        <h2 className="text-xl font-bold text-white">Agreement Overview</h2>
        <p className="text-sm text-[#A7B3AF] leading-relaxed">
          Please read these Terms & Conditions carefully before using Expense. These terms set forth the legally binding terms for your use of the Expense software ecosystem across web and mobile platforms.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-6">
        {termsList.map((term) => (
          <div key={term.num} className="glass-card rounded-2xl p-6 sm:p-8 border border-[#27312E] space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-sm font-bold flex items-center justify-center">
                {term.num}
              </span>
              <h3 className="text-xl font-bold text-white">{term.title}</h3>
            </div>
            <p className="text-sm text-[#A7B3AF] leading-relaxed pl-11">{term.text}</p>
          </div>
        ))}
      </div>

      {/* Contact Box */}
      <div className="glass-panel rounded-3xl p-8 border border-[#27312E] text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Questions regarding our Terms?</h3>
        <p className="text-sm text-[#A7B3AF]">
          Reach out to developer Siddharth Jain at <strong className="text-white">infosiddjain@gmail.com</strong> or via our support page.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2]"
          >
            Go to Contact Page
          </Link>
          <Link
            href="/privacy-policy"
            className="px-6 py-3 rounded-xl glass-card text-white font-semibold text-sm hover:bg-[#18201E]"
          >
            View Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
