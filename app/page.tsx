"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShieldCheck,
  Tag,
  BarChart3,
  Globe2,
  Zap,
  Wallet,
  Wrench,
  Calendar,
  Smartphone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Live Budget Calculator State
  const [monthlyBudget] = useState(30000);
  const [foodSpend, setFoodSpend] = useState(10500);
  const [shoppingSpend, setShoppingSpend] = useState(7500);
  const [billsSpend, setBillsSpend] = useState(6000);

  const totalSpent = foodSpend + shoppingSpend + billsSpend;
  const remainingBudget = monthlyBudget - totalSpent;

  const currencySymbol = selectedCurrency === "INR" ? "₹" : selectedCurrency === "USD" ? "$" : "€";

  const faqs = [
    {
      q: "Is Expense strictly offline and private?",
      a: "Yes! Expense is engineered with an offline-first architecture. All your transaction history, categories, and custom dashboard profiles remain on your device. We do not store or transmit your financial data to external cloud servers.",
    },
    {
      q: "Can I manage separate budgets for family or business?",
      a: "Absolutely. Expense features a Multi-Dashboard Manager. You can easily isolate personal expenses, family member allowances, work accounts, or travel trips with separate categories and budgets.",
    },
    {
      q: "Does Expense track my SMS or bank messages automatically?",
      a: "No. Expense respects user privacy by avoiding intrusive SMS reading SDKs or background telemetry. You enjoy full control to log and categorize expenses with zero unwanted system permissions.",
    },
    {
      q: "Where can I download the Expense mobile app?",
      a: "Expense mobile app is available on the Google Play Store under developer Siddharth Gauri. You can also view our full suite including Smart Utility Suite and Daily Planner Pro.",
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2DD4A8]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#2DD4A8]" />
              Expense App v1.4.0 • Midnight Emerald Privacy Suite
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Know where your money goes. <br />
              <span className="text-gradient-emerald">Take total control.</span>
            </h1>

            <p className="text-lg text-[#A7B3AF] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Track every expense in one simple place. Built with strict offline-first privacy, custom multi-dashboard profiles, and deep financial analytics. No cloud tracking. No data selling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-base hover:bg-[#5EE7C2] transition-all shadow-[0_0_25px_rgba(45,212,168,0.35)]"
              >
                <Smartphone className="w-5 h-5" />
                Download Mobile App
              </a>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-white font-semibold text-base hover:bg-[#18201E] border border-[#27312E]"
              >
                Explore Features & Services
                <ArrowRight className="w-4 h-4 text-[#2DD4A8]" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#27312E]">
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-[#6F7C78]">Offline Privacy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2DD4A8]">4.9 ★</div>
                <div className="text-xs text-[#6F7C78]">Play Store Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Multi-Dashboard</div>
                <div className="text-xs text-[#6F7C78]">Custom Profiles</div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE HERO DEMO CARD */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-[#27312E] relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#A7B3AF]">Interactive Live Preview</h3>
                  <p className="text-xl font-bold text-white">Monthly Expense Visualizer</p>
                </div>
                <div className="flex bg-[#18201E] p-1 rounded-xl border border-[#27312E]">
                  {["INR", "USD", "EUR"].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                        selectedCurrency === curr
                          ? "bg-[#2DD4A8] text-[#0B0F0E]"
                          : "text-[#A7B3AF] hover:text-white"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Total Card */}
              <div className="bg-[#121817] p-5 rounded-2xl border border-[#27312E] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A7B3AF]">
                  <span>Total Spent</span>
                  <span className="text-[#FB7185] font-semibold">
                    {Math.round((totalSpent / monthlyBudget) * 100)}% of Budget
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#2DD4A8]">
                  {currencySymbol}{totalSpent.toLocaleString()}
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 bg-[#18201E] rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${(foodSpend / monthlyBudget) * 100}%` }}
                    className="bg-[#F59E0B] h-full"
                    title="Food"
                  />
                  <div
                    style={{ width: `${(shoppingSpend / monthlyBudget) * 100}%` }}
                    className="bg-[#C084FC] h-full"
                    title="Shopping"
                  />
                  <div
                    style={{ width: `${(billsSpend / monthlyBudget) * 100}%` }}
                    className="bg-[#F87171] h-full"
                    title="Bills"
                  />
                </div>
              </div>

              {/* Category Breakdown Sliders / Inputs */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" /> Food & Dining
                    </span>
                    <span className="text-[#A7B3AF]">{currencySymbol}{foodSpend.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={foodSpend}
                    onChange={(e) => setFoodSpend(Number(e.target.value))}
                    className="w-full accent-[#2DD4A8] cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C084FC]" /> Shopping & Lifestyle
                    </span>
                    <span className="text-[#A7B3AF]">{currencySymbol}{shoppingSpend.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={shoppingSpend}
                    onChange={(e) => setShoppingSpend(Number(e.target.value))}
                    className="w-full accent-[#2DD4A8] cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" /> Bills & Utilities
                    </span>
                    <span className="text-[#A7B3AF]">{currencySymbol}{billsSpend.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={billsSpend}
                    onChange={(e) => setBillsSpend(Number(e.target.value))}
                    className="w-full accent-[#2DD4A8] cursor-pointer"
                  />
                </div>
              </div>

              {/* Budget Summary Split */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#27312E] text-center">
                <div className="bg-[#18201E] p-3 rounded-xl">
                  <div className="text-[10px] uppercase text-[#6F7C78] font-bold">Monthly Target</div>
                  <div className="text-sm font-bold text-white">{currencySymbol}{monthlyBudget.toLocaleString()}</div>
                </div>
                <div className="bg-[#12352D] border border-[#2DD4A8]/30 p-3 rounded-xl">
                  <div className="text-[10px] uppercase text-[#2DD4A8] font-bold">Remaining Safe</div>
                  <div className="text-sm font-bold text-[#34D399]">{currencySymbol}{remainingBudget.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#2DD4A8] uppercase">
            Designed for Modern Financial Clarity
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything you need to master your money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8]">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Multi-Dashboard Management</h3>
            <p className="text-sm text-[#A7B3AF] leading-relaxed">
              Create separate isolated dashboards for brother expenses, office budgets, personal savings, or holiday trips without data bleed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">100% Offline-First Privacy</h3>
            <p className="text-sm text-[#A7B3AF] leading-relaxed">
              All transactions are strictly stored on local storage. No remote database sync, no third-party trackers, zero server dependencies.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8]">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Custom Category Budgets</h3>
            <p className="text-sm text-[#A7B3AF] leading-relaxed">
              Assign specific monthly thresholds to Food, Shopping, Transport, or Bills. Receive instant color-coded visual indicator alerts.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8]">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Deep Financial Analytics</h3>
            <p className="text-sm text-[#A7B3AF] leading-relaxed">
              Inspect weekly, monthly, and annual charts. Compare income vs. expense flow and export your data safely whenever needed.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8]">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Global Multi-Currency</h3>
            <p className="text-sm text-[#A7B3AF] leading-relaxed">
              Seamlessly switch between INR (₹), USD ($), EUR (€), GBP (£), JPY (¥) and more with instant symbol formatting.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Instant Data Wipe & Seed</h3>
            <p className="text-sm text-[#A7B3AF] leading-relaxed">
              Enjoy total control to wipe single dashboards, clean historical entries, or load demonstration sample data in one click.
            </p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM APPS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#27312E] space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#2DD4A8] uppercase">
                Siddharth Gauri App Ecosystem
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Explore our full suite of productivity apps
              </h2>
            </div>
            <a
              href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2] transition-colors self-start"
            >
              View Google Play Developer Page →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* App 1 */}
            <div className="bg-[#121817] p-6 rounded-2xl border border-[#27312E] space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#12352D] border border-[#2DD4A8]/40 flex items-center justify-center text-[#2DD4A8]">
                  <Wallet className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#12352D] text-[#2DD4A8] text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#2DD4A8]" /> 4.9
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Expense Tracker</h3>
              <p className="text-xs text-[#A7B3AF]">Finance & Money Tracker</p>
              <p className="text-sm text-[#6F7C78] leading-relaxed">
                Smart multi-dashboard expense tracker with custom category budgets & analytics.
              </p>
            </div>

            {/* App 2 */}
            <div className="bg-[#121817] p-6 rounded-2xl border border-[#27312E] space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#12352D] border border-[#2DD4A8]/40 flex items-center justify-center text-[#2DD4A8]">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#12352D] text-[#2DD4A8] text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#2DD4A8]" /> 4.8
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Smart Utility Suite</h3>
              <p className="text-xs text-[#A7B3AF]">Productivity & Utilities</p>
              <p className="text-sm text-[#6F7C78] leading-relaxed">
                All-in-one minimal utility suite for daily productivity and task management.
              </p>
            </div>

            {/* App 3 */}
            <div className="bg-[#121817] p-6 rounded-2xl border border-[#27312E] space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#12352D] border border-[#2DD4A8]/40 flex items-center justify-center text-[#2DD4A8]">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#12352D] text-[#2DD4A8] text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#2DD4A8]" /> 4.9
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Daily Planner Pro</h3>
              <p className="text-xs text-[#A7B3AF]">Lifestyle & Habit Tracker</p>
              <p className="text-sm text-[#6F7C78] leading-relaxed">
                Organize your routines, set goal reminders, and track your daily streaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-[#2DD4A8] uppercase">
            Got Questions?
          </h2>
          <p className="text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#27312E] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  <span className="text-[#2DD4A8]">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#A7B3AF] leading-relaxed border-t border-[#27312E]/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-[#12352D] via-[#121817] to-[#0B0F0E] border border-[#2DD4A8]/40 text-center space-y-6 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2DD4A8]/20 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto relative">
            Start managing your expenses with 100% privacy today
          </h2>
          <p className="text-[#A7B3AF] max-w-xl mx-auto text-base relative">
            Join thousands of users using Expense to keep their personal finances transparent, organized, and secure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative pt-4">
            <a
              href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-base hover:bg-[#5EE7C2] transition-all shadow-[0_0_30px_rgba(45,212,168,0.4)] flex items-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Get Expense Mobile App
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl glass-card text-white font-semibold text-base hover:bg-[#18201E]"
            >
              Contact Developer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
