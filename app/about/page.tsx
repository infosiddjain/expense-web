import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, Code, Mail, Smartphone, Lock, Zap, Target, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Expense — Offline-First Money Companion",
  description: "Learn about Expense, its offline-first privacy model, and its creator Siddharth Jain.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#2DD4A8]" />
          Privacy-First Financial Technology
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          About <span className="text-gradient-emerald">Expense</span>
        </h1>
        <p className="text-lg text-[#A7B3AF] leading-relaxed">
          Expense is a personal finance companion built on a fundamental promise: your money data belongs to you, and only you.
        </p>
      </div>

      {/* Main Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-6 border border-[#27312E]">
          <h2 className="text-2xl font-bold text-white">Why Expense was Created</h2>
          <p className="text-[#A7B3AF] text-sm leading-relaxed">
            Most modern expense trackers require cloud logins, read sensitive SMS bank notifications, and store your personal balance sheets on remote servers. We believed there had to be a better, safer approach.
          </p>
          <p className="text-[#A7B3AF] text-sm leading-relaxed">
            Expense was engineered from the ground up to operate <strong className="text-white">100% offline</strong>. Whether you are tracking daily groceries, separating work reimbursements from personal savings, or managing family member budgets, Expense keeps everything stored strictly inside your local device storage.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#2DD4A8]">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> No Mandatory Accounts</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> No SMS Scraping</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> No Cloud Leakage</span>
          </div>
        </div>

        {/* Developer Profile Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 space-y-6 border border-[#27312E] text-center">
          <div className="w-24 h-24 mx-auto rounded-3xl bg-[#12352D] border-2 border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8] shadow-[0_0_20px_rgba(45,212,168,0.3)]">
            <Code className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Siddharth Jain</h3>
            <p className="text-xs text-[#2DD4A8] font-semibold mt-1">Creator & Lead Software Engineer</p>
            <p className="text-xs text-[#6F7C78]">Google Play Developer: Siddharth Gauri</p>
          </div>
          <p className="text-xs text-[#A7B3AF] leading-relaxed">
            Dedicated to building privacy-respecting, high-performance mobile and web utilities that simplify everyday lives.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href="mailto:infosiddjain@gmail.com"
              className="px-4 py-2 rounded-xl bg-[#18201E] border border-[#27312E] text-xs font-medium text-white hover:border-[#2DD4A8] transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#2DD4A8]" /> Email Siddharth
            </a>
            <a
              href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] text-xs font-bold hover:bg-[#5EE7C2] transition-all flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5" /> Play Store
            </a>
          </div>
        </div>
      </div>

      {/* Core Principles Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white">Our Core Principles</h2>
          <p className="text-sm text-[#A7B3AF] mt-1">The values that shape every line of code in Expense.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12352D] flex items-center justify-center text-[#2DD4A8]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Local Storage Security</h3>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              Your financial logs stay inside local storage (`AsyncStorage` on mobile, encrypted local state on web).
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12352D] flex items-center justify-center text-[#2DD4A8]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Instant Multi-Dashboard</h3>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              Switch between personal, business, or family dashboard tabs without page reload delays.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12352D] flex items-center justify-center text-[#2DD4A8]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Budget Discipline</h3>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              Visual category progress indicators provide immediate feedback before overspending occurs.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12352D] flex items-center justify-center text-[#2DD4A8]">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero Subscription Traps</h3>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              All core expense tracking, categories, budgets, and reporting features are 100% accessible.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel rounded-3xl p-8 text-center space-y-4 border border-[#27312E]">
        <h3 className="text-xl font-bold text-white">Have questions or want to collaborate?</h3>
        <p className="text-sm text-[#A7B3AF] max-w-lg mx-auto">
          Reach out directly to Siddharth Jain via our contact support page or WhatsApp channel.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2]"
          >
            Go to Contact Page
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl glass-card text-white font-semibold text-sm hover:bg-[#18201E]"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
