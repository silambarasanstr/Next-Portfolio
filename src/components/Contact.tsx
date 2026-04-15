"use client";
import dynamic from "next/dynamic";
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
      value: "(+91) - 9092387869",
      href: "tel:+919092387869",
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
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Work Together 🚀
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Get In Touch
            </h3>

            <div className="space-y-5 ">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/10 transition"
                  >
                    <div className="p-3 bg-blue-500/20 rounded-full">
                      <Icon className="text-blue-400" size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-blue-400 transition"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition text-white py-3 rounded-lg font-medium shadow-lg">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
