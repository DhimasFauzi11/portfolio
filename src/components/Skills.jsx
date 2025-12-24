import React from "react";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="absolute inset-0 bg-[#171c22]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#00bd95]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-[#00bd95]">Skills</span>
            </h2>
            <div className="h-px w-16 bg-[#00bd95]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, icon: Icon, items }, idx) => (
            <div
              key={category}
              className="bg-[#20272f] p-6 rounded-2xl border border-[#00bd95]/20 hover:border-[#00bd95] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00bd95]/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl flex gap-3 font-bold text-[#00bd95] mb-4">
                <Icon className="" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#171c22] text-gray-300 rounded-lg text-sm border border-[#00bd95]/30 hover:bg-[#00bd95] hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
