'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import { skills } from '@/data/resume'
import { Code2, Brain, Server, Cloud } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-5 h-5" />,
  backend: <Server className="w-5 h-5" />,
  ai: <Brain className="w-5 h-5" />,
  devops: <Cloud className="w-5 h-5" />,
}

const colorMap: Record<string, string> = {
  frontend: 'from-blue-500 to-cyan-400',
  backend: 'from-green-500 to-emerald-400',
  ai: 'from-purple-500 to-pink-400',
  devops: 'from-orange-500 to-amber-400',
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                关于我
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary-light mx-auto" />
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, category], index) => (
            <ScrollReveal key={key} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-bg-card border border-border hover:border-white/10 transition-all duration-500"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorMap[key]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${colorMap[key]} bg-opacity-10`}>
                      <div className="text-white/90">{iconMap[key]}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white/90">{category.label}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-sm text-white/60 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:text-white/80 hover:border-white/10 hover:bg-white/[0.06] transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
