'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import TiltCard from './ui/TiltCard'
import { projects } from '@/data/resume'
import { ExternalLink, Github, FileText, Play } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                项目经历
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary-light mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              className={project.id === 1 ? 'lg:col-span-2' : ''}
            >
              <TiltCard className="group h-full">
                <div className="relative h-full p-6 md:p-8 rounded-2xl bg-bg-card border border-border hover:border-white/10 transition-all duration-500 overflow-hidden">
                  {/* Background gradient accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-[0.03] blur-3xl group-hover:opacity-[0.06] transition-opacity duration-700`} />

                  {/* Top bar with gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-white/40 flex-wrap">
                          <span>{project.role}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span>{project.period}</span>
                          {project.location && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <span>{project.location}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Project number */}
                      <span className={`text-4xl font-black bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-20`}>
                        {String(project.id).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {project.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/50 leading-relaxed">
                          <span className={`mt-2 w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs text-white/50 bg-white/[0.04] border border-white/[0.06] rounded-md hover:text-white/70 hover:border-white/10 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.link && (
                        <a
                          href={project.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-1.5 px-4 py-2 text-sm text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 hover:border-primary/30 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {project.link.label}
                        </a>
                      )}
                      {project.link2 && (
                        <a
                          href={project.link2.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-1.5 px-4 py-2 text-sm text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 hover:border-primary/30 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {project.link2.label}
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/50 border border-white/10 rounded-lg hover:text-white/70 hover:border-white/20 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      )}
                      {project.pdfReport && (
                        <a
                          href={project.pdfReport}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/50 border border-white/10 rounded-lg hover:text-white/70 hover:border-white/20 transition-all"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          查看报告
                        </a>
                      )}
                      {project.videoEmbed !== undefined && (
                        <a
                          href={project.videoEmbed || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/50 border border-white/10 rounded-lg hover:text-white/70 hover:border-white/20 transition-all"
                        >
                          <Play className="w-3.5 h-3.5" />
                          观看演示
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
