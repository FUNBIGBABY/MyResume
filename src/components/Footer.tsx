'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import { personalInfo } from '@/data/resume'
import { Mail, Phone, Github, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-6 border-t border-border">
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                联系方式
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary-light mx-auto mb-6" />
            <p className="text-white/40 text-sm">期待与您交流合作</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-bg-card border border-border hover:border-white/10 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/30">邮箱</p>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-bg-card border border-border hover:border-white/10 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <Phone className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/30">电话</p>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{personalInfo.phone}</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-bg-card border border-border hover:border-white/10 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-white/[0.06] group-hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 text-white/70" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/30">GitHub</p>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">FUNBIGBABY</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-bg-card border border-border">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <MapPin className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/30">所在地</p>
                <p className="text-sm text-white/70">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-white/20"
        >
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-1">Designed & Built with Next.js</p>
        </motion.div>
      </div>
    </footer>
  )
}
