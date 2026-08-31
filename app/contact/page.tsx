"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Mail,
  MessageSquare,
  Share2,
  Globe,
  MessageCircle,
  Send,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Feature Request",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send email. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      label: "Email Support",
      subtitle: "infosiddjain@gmail.com",
      href: "mailto:infosiddjain@gmail.com",
      icon: <Mail className="w-5 h-5 text-[#EF4444]" />,
    },
    {
      label: "WhatsApp Direct",
      subtitle: "+91 9259457900",
      href: "https://wa.me/9259457900",
      icon: <MessageSquare className="w-5 h-5 text-[#22C55E]" />,
    },
    {
      label: "Facebook",
      subtitle: "@infosiddjain",
      href: "https://www.facebook.com/infosiddjain",
      icon: <Share2 className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      label: "Twitter / X",
      subtitle: "@infosiddjain",
      href: "https://x.com/infosiddjain",
      icon: <Globe className="w-5 h-5 text-[#38BDF8]" />,
    },
    {
      label: "Instagram",
      subtitle: "@infosiddjain",
      href: "https://www.instagram.com/infosiddjain/",
      icon: <MessageCircle className="w-5 h-5 text-[#EC4899]" />,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12352D] border border-[#2DD4A8]/40 text-[#2DD4A8] text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Contact <span className="text-gradient-emerald">Developer & Support</span>
        </h1>
        <p className="text-lg text-[#A7B3AF] leading-relaxed">
          Have questions, feature requests, or custom project inquiries? Connect directly with creator Siddharth Jain.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-6 border border-[#27312E]">
          <h2 className="text-2xl font-bold text-white">Send a Direct Message</h2>
          <p className="text-xs text-[#A7B3AF]">
            Fill out the form below to send an automated email directly to infosiddjain@gmail.com.
          </p>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-[#FB7185]/10 border border-[#FB7185]/40 text-[#FB7185] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {submitted ? (
            <div className="bg-[#12352D] border border-[#2DD4A8] p-8 rounded-2xl text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#2DD4A8]/20 flex items-center justify-center text-[#2DD4A8]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-[#A7B3AF] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding &quot;{formData.subject}&quot; has been delivered to <strong className="text-[#2DD4A8]">infosiddjain@gmail.com</strong>. Siddharth Jain will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "Feature Request", message: "" });
                }}
                className="px-6 py-2.5 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] text-xs font-bold hover:bg-[#5EE7C2] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#A7B3AF] uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Siddharth"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121817] border border-[#27312E] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4A8]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#A7B3AF] uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#121817] border border-[#27312E] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4A8]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#A7B3AF] uppercase">Topic / Inquiry</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#121817] border border-[#27312E] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4A8]"
                >
                  <option value="Feature Request">Feature Request</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Custom App Development">Custom App Development</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#A7B3AF] uppercase">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#121817] border border-[#27312E] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4A8]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#2DD4A8] text-[#0B0F0E] font-bold text-sm hover:bg-[#5EE7C2] transition-colors shadow-[0_0_20px_rgba(45,212,168,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Email...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Email Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Social Channels & Developer Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-[#27312E] space-y-4">
            <h3 className="text-xl font-bold text-white">Official Channels</h3>
            <p className="text-xs text-[#A7B3AF]">Connect across any of our social channels below:</p>

            <div className="space-y-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#121817] border border-[#27312E] hover:border-[#2DD4A8] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#18201E] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#2DD4A8] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-[#6F7C78]">{item.subtitle}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#2DD4A8] font-bold flex items-center gap-1">
                    Connect <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-[#27312E] text-center space-y-3">
            <h4 className="text-sm font-bold text-white uppercase">Google Play Store Developer</h4>
            <p className="text-xs text-[#A7B3AF]">Explore all apps released under developer name Siddharth Gauri.</p>
            <a
              href="https://play.google.com/store/apps/developer?id=Siddharth+Gauri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#18201E] border border-[#27312E] text-xs font-bold text-[#2DD4A8] hover:border-[#2DD4A8]"
            >
              Open Play Store Developer Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
