import React from "react";
import { Github, ExternalLink } from "lucide-react";
import picture from "../assets/fundamental-data-science.png"

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#20272f] to-[#171c22]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#00bd95]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-[#00bd95]">Projects</span>
            </h2>
            <div className="h-px w-16 bg-[#00bd95]" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects i have Built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#20272f] rounded-2xl overflow-hidden border border-[#00bd95]/20 hover:border-[#00bd95] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00bd95]/20"
            >
              <div className="h-56 bg-gradient-to-br from-[#00bd95]/20 to-[#00bd95]/5 flex items-center justify-center">
                <img src={project.image} alt="" className="h-fit" />
              </div>

              <div className="p-6 space-y-4 mt-8">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#00bd95]/20 text-[#00bd95] rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#00bd95]/20">
                  <span className="text-gray-500 text-sm">{project.date}</span>

                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-[#00bd95] hover:text-white transition-colors"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <Github size={18} />
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
