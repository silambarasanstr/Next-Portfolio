"use client";

import React from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "developersimbu2025@gmail.com",
      href: "mailto:developersimbu2025@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "(+91) - 8220110117",
      href: "tel:+918220110117",
      icon: Phone,
    },
    {
      label: "Location",
      value: "Chennai",
      href: null,
      icon: MapPin,
    },
  ];

  return (
    <section
      id="contact"
      className="py-10  bg-linear-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Let&apos;s Work Together 🚀
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-lg mx-auto">
          <div
            className="bg-white/5 border border-white/10 rounded-xl
            p-4 sm:p-5 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">
              Get In Touch
            </h3>

            {/* Contact Details */}
            <div className="space-y-2">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.label}
                    className="flex items-center gap-3 p-3 rounded-lg
                    hover:bg-white/10 transition"
                  >
                    {/* Icon */}
                    <div className="shrink-0 p-2 bg-blue-500/20 rounded-full">
                      <Icon className="text-blue-400" size={17} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">{info.label}</p>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="block text-sm text-white hover:text-blue-400
                          transition truncate"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resume Button */}
            <div className="mt-5">
              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2
                bg-linear-to-r from-blue-500 to-purple-500
                hover:from-blue-600 hover:to-purple-600
                transition text-white py-2.5 rounded-md
                text-sm font-medium shadow-md"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
