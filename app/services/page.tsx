import Link from "next/link";
import type { Metadata } from "next";
import { FolderKanban, Target, PieChart, Coins, ShieldAlert, Smartphone, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Features — Expense Tracker",
  description: "Explore the features, multi-dashboard capabilities, budgeting tools, and app ecosystem offered by Expense.",
};

export default function ServicesPage() {
  const servicesList = [
    {
      icon: <FolderKanban className="w-7 h-7 text-[#2DD4A8]" />,
      title: "Multi-Dashboard Account Suite",
      description:
        "Manage multiple separate ledger profiles under one roof. Create isolated dashboards for personal spending, family members, office reimbursements, or vacation funds.",
      highlights: ["Isolated Transaction Logs", "Custom Dashboard Icons", "Single-Click Dashboard Switching"],
    },
    {
      icon: <Target className="w-7 h-7 text-[#2DD4A8]" />,
      title: "Category Budgeting & Alerts",
      description:
        "Set strict monthly target caps on custom categories such as Food, Shopping, Transport, and Utilities. Visual progress bars highlight spending speed.",
      highlights: ["Custom Color Coding", "Budget Exhaustion Warnings", "Dynamic Remaining Balance"],
    },
    {
      icon: <PieChart className="w-7 h-7 text-[#2DD4A8]" />,
      title: "Financial Analytics & Reports",
      description:
        "Understand exactly where your funds flow with category breakdown percentages, weekly/monthly spending trends, and downloadable balance sheets.",
      highlights: ["Visual Percentage Wheels", "Income vs. Expense Balance", "Clean Data Export"],
    },
    {
      icon: <Coins className="w-7 h-7 text-[#2DD4A8]" />,
      title: "Global Multi-Currency Formatting",
      description:
        "Support for major world currencies including Indian Rupee (₹), US Dollar ($), Euro (€), British Pound (£), Japanese Yen (¥), and UAE Dirham (AED).",
      highlights: ["Instant Symbol Switch", "Universal Locale Support", "Zero Exchange Rate Clutter"],
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-[#2DD4A8]" />,
      title: "Offline Data Ownership & Hygiene",
      description:
        "Full control over your financial history. Easily wipe single active dashboards, clear transaction logs, or seed sample data for testing.",
      highlights: ["100% Local Storage", "Instant Dashboard Wipe", "Sample Data Seeding"],
    },
    {
      icon: <Smartphone className="w-7 h-7 text-[#2DD4A8]" />,
      title: "Productivity App Ecosystem",
      description:
        "Explore developer Siddharth Gauri's ecosystem of lightweight mobile applications tailored for daily productivity, habit tracking, and money management.",
      highlights: ["Expense Tracker 4.9★", "Smart Utility Suite 4.8★", "Daily Planner Pro 4.9★"],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-xs font-semibold">
          ⚡ Features & Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Expense <span className="text-gradient-emerald">Services & Tools</span>
        </h1>
        <p className="text-lg text-[#A7B3AF] leading-relaxed">
          Discover all the tools designed into Expense to make money management effortless, private, and insightful.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((srv, idx) => (
          <div key={idx} className="glass-card rounded-3xl p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#12352D] border border-[#2DD4A8]/40 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,168,0.2)]">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{srv.title}</h3>
              <p className="text-sm text-[#A7B3AF] leading-relaxed">{srv.description}</p>
            </div>

            <div className="pt-4 border-t border-[#27312E] space-y-2">
              {srv.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-[#2DD4A8]">
                  <Check className="w-3.5 h-3.5 text-[#2DD4A8]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FEATURE COMPARISON MATRIX TABLE */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#27312E] space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white">How Expense Compares</h2>
          <p className="text-sm text-[#A7B3AF]">Why users prefer our offline privacy model over traditional cloud trackers.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#27312E] text-xs text-[#A7B3AF] uppercase font-mono">
                <th className="py-4 px-6">Feature / Capability</th>
                <th className="py-4 px-6 text-[#2DD4A8] font-bold">Expense App</th>
                <th className="py-4 px-6 text-[#6F7C78]">Generic Cloud Budget Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27312E] text-sm">
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Data Privacy Model</td>
                <td className="py-4 px-6 text-[#34D399] font-bold">100% Local Device Storage</td>
                <td className="py-4 px-6 text-[#FB7185]">Remote Cloud Storage</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">SMS Bank Scraping</td>
                <td className="py-4 px-6 text-[#34D399] font-bold">Never (Zero Intrusive Reading)</td>
                <td className="py-4 px-6 text-[#FB7185]">Reads SMS messages & balance</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Multi-Dashboard Accounts</td>
                <td className="py-4 px-6 text-[#34D399] font-bold">Unlimited Custom Dashboards</td>
                <td className="py-4 px-6 text-[#FB7185]">Single account or paywall locked</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Category Budgeting</td>
                <td className="py-4 px-6 text-[#34D399] font-bold">Fully Customizable</td>
                <td className="py-4 px-6 text-[#A7B3AF]">Rigid predefined buckets</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Ad Trackers & Profiling</td>
                <td className="py-4 px-6 text-[#34D399] font-bold">Zero Ad Trackers</td>
                <td className="py-4 px-6 text-[#FB7185]">Ad networks & monetized data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA FOOTER */}
      <div className="text-center space-y-6 pt-4">
        <h3 className="text-2xl font-bold text-white">Ready to experience Expense?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2]"
          >
            Download from Play Store
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl glass-card text-white font-semibold text-sm hover:bg-[#18201E]"
          >
            Contact Support & Developer
          </Link>
        </div>
      </div>
    </div>
  );
}
