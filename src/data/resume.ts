export const personalInfo = {
  name: '顾哲毓',
  englishName: 'Michael Gu',
  phone: '18779153639',
  email: 'michaelgu0927@gmail.com',
  location: '南昌',
  status: '应届生',
  github: 'https://github.com/FUNBIGBABY',
  headline: '全栈工程师 / AI 开发者',
  bio: '拥有计算机科学硕士与本科双学位，专注于全栈开发与人工智能应用。熟练掌握 React、Next.js、Python、FastAPI 等技术栈，热衷于将 AI 能力融入产品，打造极致用户体验。',
}

export const education = [
  {
    school: '新南威尔士大学',
    schoolEn: 'University of New South Wales',
    badge: '海外QS前100',
    degree: '计算机科学与技术（人工智能）硕士',
    faculty: '工程学院',
    location: '悉尼',
    period: '2024年09月 - 2026年01月',
    courses: ['算法', '人工智能', '计算机网络', '计算机视觉', '机器学习', '深度学习', '数据库实施', '前端编程'],
  },
  {
    school: '戴尔豪斯大学',
    schoolEn: 'Dalhousie University',
    badge: '',
    degree: '计算机科学 本科',
    faculty: '计算机系',
    location: '哈利法克斯',
    period: '2019年09月 - 2024年04月',
    courses: ['计算机视觉', '计算机网络', '算法', '数据分析', '用户交互设计'],
  },
]

export interface Project {
  id: number
  title: string
  period: string
  role: string
  location: string
  description: string[]
  techStack: string[]
  link?: { url: string; label: string }
  github?: string
  pdfReport?: string
  videoEmbed?: string
  gradient: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '基于大模型的全中文智能简历匹配与定制平台',
    period: '2026年01月 - 2026年02月',
    role: '全栈工程师',
    location: '',
    description: [
      '采用 Next.js 14 结合 Framer Motion 动画引擎，从零构建极简深色模式的响应式前端界面',
      '针对国内招聘市场的 JD 特点，设计多轮复杂的提示词模板，实现匹配资产的动态高亮展示',
      '构建核心大模型调度引擎，针对不同业务场景采用分层模型策略',
    ],
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Framer Motion', 'LLM'],
    link: { url: 'https://resume.qingtu-studio.com', label: '访问平台' },
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'Valorie.ai Expert Framework Builder',
    period: '2025年09月 - 2025年12月',
    role: '全栈开发工程师 | 项目组长',
    location: '悉尼',
    description: [
      '主导专家端框架核心功能的全栈开发（React + FastAPI）',
      '设计并落地高可复用的组件库与 RESTful API 规范，前端页面加载速度提升24%',
      '系统上线后支撑了内部10名专家的日常审批工作',
    ],
    techStack: ['React', 'FastAPI', 'RESTful API', 'Cloud Security'],
    link: { url: 'https://expert.valorie.ai/', label: '访问网站' },
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    id: 3,
    title: '智能物品图像识别系统',
    period: '2025年04月 - 2025年06月',
    role: '机器学习工程师 | 项目组长',
    location: '悉尼',
    description: [
      '负责基于 CNN 的物品图像分割与识别模型研发',
      '采用 Cross-Entropy + 类别均衡采样缓解长尾分布，主类准确率 ↑ 18pp',
      '自动生成 ~1万高置信伪标签，减少人工标注工作量 ≈30%',
    ],
    techStack: ['Python', 'CNN', 'Computer Vision', 'Deep Learning'],
    pdfReport: '/projects/pj3-report.pdf',
    gradient: 'from-green-600 to-emerald-500',
  },
  {
    id: 4,
    title: 'Unity3D 恐怖动作游戏',
    period: '2023年09月 - 2023年12月',
    role: '场景 & 互动逻辑',
    location: '哈利法克斯',
    description: [
      '主导谜题/关卡设计与核心交互脚本，实现多结局叙事体验',
      '编写 Unity3D + C# 脚本 30+ 个，实现物理触发、背包系统、NPC对话',
      '在校 Indie Game Expo 中获"最佳氛围演出"提名',
    ],
    techStack: ['Unity3D', 'C#', 'Game Design', 'Level Design'],
    github: 'https://github.com/coollkr/GameProject',
    videoEmbed: '', // B站视频链接待填
    gradient: 'from-red-600 to-orange-500',
  },
  {
    id: 5,
    title: 'A股智能选股平台',
    period: '2026年02月 - 至今',
    role: '全栈工程师',
    location: '',
    description: [
      '基于 Next.js + FastAPI 构建 A 股智能选股平台',
      '集成 TradingView K线图、MACD 指标、资金流向等专业图表',
      '接入 DeepSeek AI 实现自然语言智能选股功能',
    ],
    techStack: ['Next.js', 'FastAPI', 'Redis', 'TradingView', 'DeepSeek AI'],
    link: { url: 'https://stock.qingtu-studio.com', label: '访问平台' },
    gradient: 'from-amber-600 to-yellow-500',
  },
]

export const skills = {
  frontend: {
    label: '前端开发',
    items: ['React', 'Next.js 14', 'Vue', 'Tailwind CSS', 'Framer Motion'],
  },
  backend: {
    label: '后端 / 语言',
    items: ['Node.js', 'Java', 'Python', 'C/C#'],
  },
  ai: {
    label: 'AI / 数据',
    items: ['AI Agent', 'Prompt Engineering', '机器学习', '深度学习', '计算机视觉'],
  },
  devops: {
    label: 'DevOps / 云',
    items: ['Docker', 'Linux'],
  },
}
