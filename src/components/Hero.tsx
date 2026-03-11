'use client'

import { motion } from 'framer-motion'
import ParticleBackground from './ui/ParticleBackground'
import TypeWriter from './ui/TypeWriter'
import { personalInfo } from '@/data/resume'
import { ArrowDown, FileText } from 'lucide-react'

export default function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] z-0" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/60 mb-8 h-10"
        >
          <TypeWriter
            texts={[
              '全栈工程师',
              'AI 应用开发者',
              'React / Next.js 专家',
              'Python / FastAPI 后端',
            ]}
            speed={120}
            deleteSpeed={60}
            pauseDuration={2500}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={handleScrollToProjects}
            className="group relative px-8 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              查看项目
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="group px-8 py-3 border border-white/10 rounded-full text-white/60 text-sm font-medium hover:border-white/20 hover:text-white/80 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              下载简历
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/40 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
