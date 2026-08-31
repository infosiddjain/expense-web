"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet, Menu, X, Smartphone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-[#27312E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8] shadow-[0_0_15px_rgba(45,212,168,0.2)] group-hover:scale-105 transition-transform">
              <Wallet className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#2DD4A8] transition-colors">
                Expense
              </span>
              <span className="text-[10px] text-[#A7B3AF] tracking-widest uppercase font-mono">
                Offline Money Tracker
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#18201E]/60 p-1.5 rounded-full border border-[#27312E]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#2DD4A8] text-[#0B0F0E] font-semibold shadow-[0_0_12px_rgba(45,212,168,0.4)]"
                      : "text-[#A7B3AF] hover:text-white hover:bg-[#27312E]/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2] transition-colors shadow-[0_0_20px_rgba(45,212,168,0.3)]"
            >
              <Smartphone className="w-4 h-4" />
              Play Store Apps
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-[#A7B3AF] hover:text-white hover:bg-[#18201E] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-b border-[#27312E] px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#2DD4A8] text-[#0B0F0E] font-bold"
                    : "text-[#A7B3AF] hover:text-white hover:bg-[#18201E]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#27312E]">
            <a
              href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm"
            >
              <Smartphone className="w-4 h-4" />
              Siddharth Gauri Play Store
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
