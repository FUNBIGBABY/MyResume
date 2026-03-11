'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import { education } from '@/data/resume'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                教育经历
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary-light mx-auto" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-1 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="w-4 h-4 rounded-full bg-primary border-4 border-bg-dark"
                  />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl bg-bg-card border border-border hover:border-white/10 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-white/90">{edu.school}</h3>
                      </div>
                      {edu.badge && (
                        <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full">
                          {edu.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-white/50 mb-1">{edu.schoolEn}</p>
                    <p className="text-white/70 mb-3">{edu.degree} · {edu.faculty}</p>

                    <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 text-xs text-white/50 bg-white/[0.03] border border-white/[0.05] rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
