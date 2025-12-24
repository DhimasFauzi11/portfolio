import React from "react";
import { Linkedin, Mail, Phone, Instagram, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-10 relative"
    >
      <div className="absolute inset-0 bg-[#171c22]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#00bd95]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In <span className="text-[#00bd95]">Touch</span>
            </h2>
            <div className="h-px w-16 bg-[#00bd95]" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate on a project, have
            a question, or just want to connect.
          </p>
        </div>
        <div className="md:w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <a
            href="mailto:hikambaidawih@gmail.com"
            className="bg-[#20272f] py-8 px-2 rounded-2xl border border-[#e94234]/20 hover:border-[#e94234] hover:bg-[#20272f]/80 transition-all duration-300 transform hover:scale-105 text-center group"
          >
            <div className="w-16 h-16 bg-[#e94234]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#e94234] transition-all duration-300">
              <Mail
                size={28}
                className="text-[#e94234] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm break-all">
              hikambaidawih@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/hikambdwh"
            className="bg-[#20272f] p-8 rounded-2xl border border-[#00bd95]/20 hover:border-[#00bd95] hover:bg-[#20272f]/80 transition-all duration-300 transform hover:scale-105 text-center group"
          >
            <div className="w-16 h-16 bg-[#00bd95]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00bd95] transition-all duration-300">
              <Github
                size={28}
                className="text-[#00bd95] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Github</h3>
            <p className="text-gray-400 text-sm">Checkout my Github Profile</p>
          </a>

          <a
            href="https://www.linkedin.com/in/hikambaidawih/"
            className="bg-[#20272f] p-8 rounded-2xl border border-[#0a66c2]/20 hover:border-[#0a66c2] hover:bg-[#20272f]/80 transition-all duration-300 transform hover:scale-105 text-center group"
          >
            <div className="w-16 h-16 bg-[#0a66c2]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0a66c2] transition-all duration-300">
              <Linkedin
                size={28}
                className="text-[#0a66c2] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>

          <a
            href="https://www.instagram.com/he_comee?igsh=MXQ5Y2tjNTBxbWxiOQ=="
            className="bg-[#20272f] p-8 rounded-2xl border border-[#ff4b60]/20 hover:border-[#ff4b60] hover:bg-[#20272f]/80 transition-all duration-300 transform hover:scale-105 text-center group"
          >
            <div className="w-16 h-16 bg-[#ff4b60]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff4b60] transition-all duration-300">
              <Instagram
                size={28}
                className="text-[#ff4b60] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instagram</h3>
            <p className="text-gray-400 text-sm">Se my instagram profile</p>
          </a>
        </div>
      </div>
    </section>
  );
}
