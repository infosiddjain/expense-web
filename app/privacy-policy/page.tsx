import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, Lock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Expense Tracker",
  description: "Read Expense's strict offline-first Privacy Policy. 100% local storage, zero data selling, and complete data ownership.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      num: "1",
      title: "Local Storage Only",
      text: "All transactions, categories, budgets, and dashboard profiles are stored strictly on your local device using secure AsyncStorage (mobile) or local client storage (web). We do not operate remote servers or store your personal balance sheets in the cloud.",
    },
    {
      num: "2",
      title: "Zero Data Selling & Ad Analytics",
      text: "We do not sell, rent, share, or monetize your personal or financial information. We do not integrate intrusive third-party ad networks, telemetry trackers, or user profiling SDKs.",
    },
    {
      num: "3",
      title: "Complete Data Ownership & Deletion",
      text: "You retain 100% control over your data. You can edit, clean single dashboard histories, or permanently wipe all transactions at any time. Uninstalling the app or clearing site data permanently deletes all stored records.",
    },
    {
      num: "4",
      title: "Minimal System Permissions",
      text: "Expense operates with minimal system permission requirements. It runs offline without demanding access to your device contact list, location, or sensitive SMS bank messages.",
    },
    {
      num: "5",
      title: "Contact Developer & Support",
      text: "If you have any questions, feedback, or inquiries regarding this Privacy Policy or your data hygiene, please contact developer Siddharth Jain directly at infosiddjain@gmail.com.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-xs font-semibold">
          <Lock className="w-3.5 h-3.5" />
          Strict Privacy Model
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy <span className="text-gradient-emerald">Policy</span>
        </h1>
        <p className="text-sm text-[#A7B3AF]">Effective Date: August 31, 2026</p>
      </div>

      {/* Hero Guarantee Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#27312E] text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8] shadow-[0_0_20px_rgba(45,212,168,0.3)]">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white">Your Financial Data Never Leaves Your Device</h2>
        <p className="text-sm text-[#A7B3AF] max-w-2xl mx-auto leading-relaxed">
          Expense is built with a strict offline-first architecture. We respect your financial privacy above all else. No user registration, no background telemetry, zero server storage.
        </p>
      </div>

      {/* Policy Clauses Grid */}
      <div className="space-y-6">
        {sections.map((sec) => (
          <div key={sec.num} className="glass-card rounded-2xl p-6 sm:p-8 border border-[#27312E] space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-sm font-bold flex items-center justify-center">
                {sec.num}
              </span>
              <h3 className="text-xl font-bold text-white">{sec.title}</h3>
            </div>
            <p className="text-sm text-[#A7B3AF] leading-relaxed pl-11">{sec.text}</p>
          </div>
        ))}
      </div>

      {/* Developer Contact Footer Box */}
      <div className="glass-panel rounded-3xl p-8 border border-[#27312E] text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Questions about Privacy?</h3>
        <p className="text-sm text-[#A7B3AF]">
          Contact developer <strong className="text-white">Siddharth Jain</strong> via email or visit our contact page.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <a
            href="mailto:infosiddjain@gmail.com"
            className="px-6 py-3 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2] flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#0B0F0E]" />
            Email infosiddjain@gmail.com
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl glass-card text-white font-semibold text-sm hover:bg-[#18201E]"
          >
            Contact Support Page
          </Link>
        </div>
      </div>
    </div>
  );
}
