import Link from "next/link";
import { Wallet, Mail, MessageSquare, ShieldCheck, Share2, Globe, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0F0E] border-t border-[#27312E] text-[#A7B3AF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#27312E]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#12352D] border border-[#2DD4A8] flex items-center justify-center text-[#2DD4A8] font-bold text-xl">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">Expense</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#A7B3AF] max-w-sm">
              Your personal money companion. Designed with a strict offline-first privacy model, multi-dashboard management, custom category budgets, and deep analytics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12352D] border border-[#2DD4A8]/30 text-[#2DD4A8] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#2DD4A8]" />
              100% Local Storage & Zero Data Selling
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#2DD4A8] transition-colors">
                  Home / Landing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2DD4A8] transition-colors">
                  About Expense
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#2DD4A8] transition-colors">
                  Services & Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2DD4A8] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">Legal & Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#2DD4A8] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#2DD4A8] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2DD4A8] transition-colors"
                >
                  Play Store Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Developer & Social */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">Developer Channels</h3>
            <p className="text-xs text-[#A7B3AF]">Created by Siddharth Jain (Siddharth Gauri)</p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:infosiddjain@gmail.com"
                className="flex items-center gap-2 hover:text-[#2DD4A8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2DD4A8]" />
                <span>infosiddjain@gmail.com</span>
              </a>
              <a
                href="https://wa.me/9259457900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#2DD4A8] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#2DD4A8]" />
                <span>WhatsApp: +91 9259457900</span>
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/infosiddjain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-[#18201E] border border-[#27312E] flex items-center justify-center text-white hover:border-[#2DD4A8] hover:text-[#2DD4A8] transition-all"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/infosiddjain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-[#18201E] border border-[#27312E] flex items-center justify-center text-white hover:border-[#2DD4A8] hover:text-[#2DD4A8] transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/infosiddjain/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#18201E] border border-[#27312E] flex items-center justify-center text-white hover:border-[#2DD4A8] hover:text-[#2DD4A8] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6F7C78]">
          <p>© {new Date().getFullYear()} Expense App. All rights reserved. Developer: Siddharth Jain.</p>
          <p>Expense App v1.4.0 (Midnight Emerald Theme)</p>
        </div>
      </div>
    </footer>
  );
}
