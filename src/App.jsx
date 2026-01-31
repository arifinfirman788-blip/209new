import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Layers, 
  Lightbulb, 
  Settings, 
  Users, 
  Zap, 
  ShoppingBag, 
  UserCircle,
  LayoutDashboard,
  Cpu,
  ArrowRight,
  PlayCircle,
  Network,
  Share2,
  Rocket,
  Globe,
  Compass,
  Briefcase,
  PenTool,
  MessageSquare,
  Repeat
} from 'lucide-react';

const Section = ({ id, title, icon: Icon, children, delay = 0, gradient = "from-indigo-600 to-violet-600" }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="mb-32 scroll-mt-24"
  >
    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
      <div className={`p-5 bg-gradient-to-br ${gradient} text-white rounded-[24px] shadow-xl shadow-indigo-100 shrink-0 self-start`}>
        <Icon size={40} />
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">{title}</h2>
        <div className="h-2 w-32 bg-indigo-600 rounded-full mt-4" />
      </div>
    </div>
    {children}
  </motion.section>
);

const Card = ({ title, description, imagePlaceholder, delay = 0, badge, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-50 hover:-translate-y-2 flex flex-col h-full"
  >
    <div className="relative h-64 bg-slate-50 overflow-hidden flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50/30" />
      <div className="relative z-10 flex flex-col items-center text-center">
        {Icon && <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-500"><Icon size={48} /></div>}
        <div className="text-slate-400 italic text-sm font-medium px-4">
          {imagePlaceholder || '可视化设计稿预留'}
        </div>
      </div>
      {badge && (
        <div className="absolute top-6 right-6 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
          {badge}
        </div>
      )}
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </motion.div>
);

const SubSectionTitle = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-8 mt-12 flex items-center gap-3">
    <div className="w-2 h-8 bg-indigo-600 rounded-full" />
    {children}
  </h3>
);

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-indigo-200 transition-all group">
    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
      <Icon size={32} />
    </div>
    <div>
      <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{title}</h4>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage, date, color = "bg-indigo-600" }) => (
  <div className="mb-8">
    <div className="flex justify-between items-end mb-3">
      <div>
        <span className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-1">{date}</span>
        <span className="text-xl font-black text-slate-900">{label}</span>
      </div>
      <span className="text-2xl font-black text-indigo-600">{percentage}%</span>
    </div>
    <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-50">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full ${color} shadow-sm`}
      />
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-100 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Cpu size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">AI <span className="text-indigo-600">Product</span></span>
          </div>
          <nav className="hidden lg:flex gap-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {[
              { id: 'strategy', label: '核心战略' },
              { id: 'arch', label: '1. 三层架构' },
              { id: 'prediction', label: '2. 需求预判' },
              { id: 'operation', label: '3. 运营形式' },
              { id: 'enterprise', label: '二、企业方案' },
              { id: 'personal', label: '三、个人智能体' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`hover:text-indigo-600 transition-all relative py-2 ${activeSection === item.id ? 'text-indigo-600' : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* 移除登录和开始按钮 */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="text-center mb-40 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50 rounded-full blur-[140px] opacity-40 -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10">
              Product Design Strategic Report
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
              智能体组成的 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">
                生产系统
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium tracking-tight">
              超越传统 App 与平台定义。通过西城家园、贵人家园、黄小西的架构与设计全统一，构建三位一体的智能体协作网络。
            </p>
          </motion.div>
        </section>

        {/* 第一大部分：构筑AI超级应用：面向区域的智能体网络 */}
        <Section id="strategy" title="一、构筑AI超级应用：面向区域的智能体网络" icon={Rocket} gradient="from-indigo-600 via-blue-600 to-emerald-600">
          <div className="mb-24 bg-slate-50 rounded-[48px] p-12 border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
              我们在搭建的是一个“智能体组成的生产系统”，而不是一个 App 或平台
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-4xl">
              短期目标是：西城家园、贵人家园、黄小西全部统一架构乃至于统一设计。
            </p>
          </div>

          {/* 特点一：统一的三层智能体架构 */}
          <div id="arch" className="scroll-mt-32 mb-32">
            <SubSectionTitle>特点一：统一的三层智能体架构</SubSectionTitle>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                {[
                  {
                    title: "1. 组织 / 区域级调度智能体",
                    desc: "作为统一入口与总调度，负责全局层面的多智能体协同。",
                    points: ["多智能体编排与调度", "精准用户识别与画像", "任务分发与状态同步"]
                  },
                  {
                    title: "2. 企业级 / 功能级服务智能体",
                    desc: "面向具体业务场景，以标准化方式提供核心业务能力。",
                    points: ["按企业类型/功能任务划分", "垂直场景能力深度挂载", "标准化服务接口输出"]
                  },
                  {
                    title: "3. 个人级 / 角色级数字分身智能体",
                    desc: "面向个人用户与从业者，构建数字世界的“第二分身”。",
                    points: ["支撑个性化服务需求", "长期记忆与经验沉淀", "身份主权与数字化身"]
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-2xl font-black text-indigo-600 mb-2">{item.title}</h4>
                    <p className="text-slate-900 font-bold mb-4 text-lg">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.points.map((p, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-5 sticky top-32">
                <a 
                  href="https://arifinfirman788-blip.github.io/2026NeiBu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative mx-auto w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl hover:scale-[1.01]"
                >
                  <img src="/131new/image/1-1.png" alt="三层架构管理后台" className="w-full h-auto block" />
                </a>
                {/* 底座示意 */}
                <div className="w-32 h-3 bg-slate-800/20 mx-auto mt-4 rounded-full blur-sm" />
              </div>
            </div>
          </div>

          {/* 特点二：交互革命与需求预判 */}
          <div id="prediction" className="scroll-mt-32 mb-32">
            <SubSectionTitle>特点二：从“功能驱动”转向“智能体驱动”</SubSectionTitle>
            
            {/* 1. 首页即智能体舞台 */}
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                  <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3">
                    <LayoutDashboard className="text-indigo-600" size={32} /> 1. 首页即智能体舞台
                  </h4>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    彻底告别传统 App 的功能菜单堆砌，将首页重构为智能体的全时互动舞台。
                  </p>
                  <div className="space-y-6">
                    {[
                      { title: "多模态呈现", desc: "融合图文、形象、状态，赋予智能体真实的“生命感”与“存在感”。", icon: PlayCircle },
                      { title: "即时交互诱导", desc: "第一眼即让用户产生“想对话、想解决问题”的欲望，降低心理门槛。", icon: MessageSquare },
                      { title: "统一扩展方式", desc: "作为通用的“能力舞台”，支持不断接入新的智能体与垂直服务。", icon: Network }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 p-5 hover:bg-slate-50 rounded-3xl transition-colors group">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h5 className="text-xl font-black text-slate-900 mb-1">{item.title}</h5>
                          <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <p className="text-indigo-600 font-black flex items-center gap-2 text-xl">
                      <Zap size={24} /> 本质：用智能体替代传统功能入口
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                <a 
                  href="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative mx-auto w-[320px] rounded-[40px] overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl hover:scale-[1.01]"
                >
                  <img src="/131new/image/1-2.png" alt="新版首页舞台" className="w-full h-auto block" />
                </a>
              </div>
            </div>

            {/* 2. 从“响应需求”转向“预判需求” */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                  <h4 className="text-3xl font-black text-slate-900 mb-8 tracking-tight flex items-center gap-3">
                    <Compass className="text-amber-600" size={32} /> 2. 从“响应需求”转向“预判需求”
                  </h4>
                  <div className="space-y-8">
                    {[
                      { title: "用户是谁", desc: "明确游客、从业者或企业身份，提供差异化服务逻辑。", icon: Users },
                      { title: "所处阶段", desc: "实时追踪来前、在途、服务中、离开后的全行程动态。", icon: Target },
                      { title: "所处场景", desc: "感知区域、企业或个人空间环境，精准匹配需求场景。", icon: Globe }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h5 className="text-xl font-black text-slate-900 mb-2">{item.title}</h5>
                          <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-8 bg-amber-50 rounded-[40px] border border-amber-100">
                    <p className="text-amber-900 font-black mb-3 flex items-center gap-2 text-xl">
                      <Zap size={24} className="text-amber-600" /> 黄小西行程服务：AI 主动参与过程
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="p-5 bg-white rounded-2xl border border-amber-200/50">
                        <span className="text-xs font-black text-amber-600 block mb-2 uppercase tracking-widest">服务模式</span>
                        <span className="text-slate-900 font-black text-lg">从“被动响应”转向“前置介入”</span>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-amber-200/50">
                        <span className="text-xs font-black text-amber-600 block mb-2 uppercase tracking-widest">运营逻辑</span>
                        <span className="text-slate-900 font-black text-lg">从“动作驱动”转向“状态驱动”</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                <a 
                  href="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0/trip/undefined" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative mx-auto w-[320px] rounded-[40px] overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl hover:scale-[1.01]"
                >
                  <img src="/131new/image/1-3.png" alt="需求预判交互界面" className="w-full h-auto block" />
                </a>
              </div>
            </div>
          </div>

          {/* 特点三：创新的运营组织形式 */}
          <div id="operation" className="scroll-mt-32">
            <SubSectionTitle>特点三：创新的运营组织形式</SubSectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "生态用户体系",
                  desc: "企业客户不只是一次性交付对象，在使用服务的同时自然成为生态节点。",
                  icon: Network,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "服务“带人上来”",
                  desc: "不强推平台宏大叙事，先通过解决具体服务问题实现自然转化。",
                  icon: Briefcase,
                  color: "bg-indigo-50 text-indigo-600"
                },
                {
                  title: "B→C 自然引流",
                  desc: "将别人的会员转化为我们的用户，服务场景即是最高效的获客入口。",
                  icon: Repeat,
                  color: "bg-emerald-50 text-emerald-600"
                },
                {
                  title: "AI时代的头条",
                  desc: "改变创作逻辑，让每一个贵州人都来参与创作自己的“黄小西”。",
                  icon: MessageSquare,
                  color: "bg-amber-50 text-amber-600"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 第二大部分：面向企业的应用级智能体系列方案 */}
        <Section id="enterprise" title="二、面向企业的应用级智能体系列方案" icon={Briefcase} gradient="from-blue-600 to-indigo-600">
          <div className="mb-24">
            <SubSectionTitle>酒店智能体的重点业务进度</SubSectionTitle>
            
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-sm mb-12">
                  <h4 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
                    <Target className="text-indigo-600" size={32} /> 1. 从“单一问询”转向“智能体门户”
                  </h4>
                  
                  <div className="space-y-12 mb-12">
                    <div className="relative pl-8 border-l-4 border-emerald-500">
                      <div className="absolute -left-3 top-0 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-sm" />
                      <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black mb-4">
                        已上线：1月23日
                      </div>
                      <h5 className="text-xl font-black text-slate-900 mb-4">正式发布“两会特别版”智能体门户</h5>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        集成 <span className="text-indigo-600 font-bold">两会助手、健康小妙招、黄小西、亲子陪伴</span> 4个专项 Agent，实现多维服务聚合。
                      </p>
                      <ProgressBar 
                        label="门户建设完成度" 
                        percentage={100} 
                        color="bg-emerald-500"
                      />
                    </div>

                    <div className="relative pl-8 border-l-4 border-indigo-500">
                      <div className="absolute -left-3 top-0 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white shadow-sm" />
                      <div className="inline-block px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black mb-4">
                        技术突破
                      </div>
                      <h5 className="text-xl font-black text-slate-900 mb-4">完成多智能体路由 (Router) 开发</h5>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        支持接入不同 AI 平台的子 Agent，通过主门户对话即可精准调度特定服务，实现了<span className="text-indigo-600 font-bold">“总控+分身”</span>的架构闭环。
                      </p>
                      
                      <div className="space-y-6">
                        <ProgressBar 
                          label="路由技术成熟度" 
                          percentage={100} 
                          color="bg-indigo-500"
                        />
                        <ProgressBar 
                          date="进行中"
                          label="“总控+分身”架构闭环演进" 
                          percentage={90} 
                          color="bg-gradient-to-r from-amber-500 to-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                <div className="relative mx-auto w-[300px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl">
                  <img src="/131new/image/2-1.png" alt="酒店智能体门户展示" className="w-full h-auto block" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
              <div className="lg:col-span-7">
                <div className="bg-slate-900 rounded-[48px] p-12 text-white shadow-xl mb-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  
                  <h4 className="text-2xl font-black mb-10 flex items-center gap-3 relative z-10">
                    <Settings className="text-indigo-400" /> 2. SaaS 化架构与极速部署
                  </h4>
                  
                  <ProgressBar 
                    date="已完成"
                    label="“酒店入驻助手”产品设计" 
                    percentage={100} 
                    color="bg-indigo-500"
                  />
                  
                  <ProgressBar 
                    date="计划中"
                    label="系统正式上线与初始化功能" 
                    percentage={60} 
                    color="bg-emerald-500"
                  />

                  <div className="mt-12 space-y-8 relative z-10">
                    <div className="p-8 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10">
                      <h5 className="font-black text-indigo-400 mb-4 tracking-tight uppercase text-sm">核心价值：实现“零门槛”入驻</h5>
                      <p className="text-slate-300 font-medium leading-relaxed text-lg">
                        改变传统繁琐的对接流程，通过<span className="text-white font-bold">交互式对话</span>引导酒店完成数字化配置，将部署成本降至最低。
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-6 p-6 bg-indigo-600/20 rounded-[32px] border border-indigo-500/30">
                      <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <Zap size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-black">上线计划：预计年前正式发布</p>
                        <p className="text-indigo-200 text-sm font-medium">届时酒店可实现分钟级自主入驻与系统初始化</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                <div className="relative mx-auto w-[300px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl">
                  <img src="/131new/image/2-2.png" alt="“酒店入驻助手”界面" className="w-full h-auto block" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-sm mb-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  
                  <h4 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3 relative z-10">
                    <UserCircle className="text-blue-600" size={32} /> 3. 多端数字分身：全场景角色覆盖
                  </h4>
                  
                  <div className="space-y-10 relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">住客端</div>
                        <h5 className="text-xl font-black text-slate-900">面向住客的个性化服务</h5>
                      </div>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                          <p className="text-slate-600 font-medium">
                            <span className="text-slate-900 font-bold">已上线：</span>两会助手等 3 个 Agent 已编排上线。
                          </p>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                          <p className="text-slate-600 font-medium">
                            <span className="text-slate-900 font-bold">联调中：</span>本地推荐官、会议助手、睡眠助手等 3 个新角色。
                          </p>
                        </div>
                      </div>
                      <ProgressBar label="住客端角色覆盖度" percentage={85} color="bg-blue-600" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">酒店/员工端</div>
                        <h5 className="text-xl font-black text-slate-900">面向酒店的高效办公协同</h5>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 mb-6">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                        <p className="text-slate-600 font-medium">
                          <span className="text-slate-900 font-bold">联调中：</span>“前台记事助手”已进入联调阶段。
                        </p>
                      </div>
                      <ProgressBar label="员工端协作覆盖度" percentage={60} color="bg-indigo-600" />
                    </div>

                    <div className="flex items-center gap-6 p-6 bg-emerald-50 rounded-[32px] border border-emerald-100">
                      <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <Rocket size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-emerald-900 font-black text-lg">上线计划：预计年前全部上线</p>
                        <p className="text-emerald-700/70 text-sm font-medium">完成从住客服务到办公协同的全场景覆盖</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                {/* PC端预览 */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl">
                  <img src="/131new/image/2-3.png" alt="PC端协同管理后台" className="w-full h-auto block" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-sm mb-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  
                  <h4 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3 relative z-10">
                    <Rocket className="text-amber-600" size={32} /> 4. 硬件设备：交互载体落地
                  </h4>
                  
                  <div className="space-y-10 relative z-10">
                    {/* 模式定型 */}
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                          <Settings size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">模式定型：ODM 贴牌模式</h5>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        确定采取 <span className="text-amber-600 font-bold">ODM 贴牌模式</span>；已对接 5 家供应商确定硬件设计细节和首批购买量。
                      </p>
                    </div>

                    {/* 技术方案 */}
                    <div className="p-8 bg-indigo-50 rounded-[32px] border border-indigo-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                          <Cpu size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">技术方案：样机测试与优化</h5>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        已收到 <span className="text-indigo-600 font-bold">喵伴小音箱</span> 样机并上机测试，目前已实现智能问答与服务下单。将根据测试效果优化酒店智能体，并反馈硬件需求。
                      </p>
                      <ProgressBar label="硬件服务集成进度" percentage={75} color="bg-indigo-600" />
                    </div>

                    {/* 风险提示 */}
                    <div className="flex items-start gap-6 p-8 bg-red-50 rounded-[32px] border border-red-100">
                      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Repeat size={24} />
                      </div>
                      <div>
                        <p className="text-red-900 font-black text-lg mb-2">风险提示：供应链周期影响</p>
                        <p className="text-red-700/80 font-medium text-sm leading-relaxed">
                          厂家 2 月 8 日放假及一个月设计周期。年前定产方案，最快 <span className="font-bold">三月中</span> 获得量产样机。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl">
                  <img src="/131new/image/2-4.png" alt="硬件交互载体截图" className="w-full h-auto block" />
                </div>
              </div>
            </div>

            {/* 5. 通用供应链+电商体系 */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-sm mb-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  
                  <h4 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3 relative z-10">
                    <ShoppingBag className="text-emerald-600" size={32} /> 5. 通用供应链+电商体系：构建交易闭环
                  </h4>
                  
                  <div className="space-y-10 relative z-10">
                    {/* 架构总结 */}
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                          <Layers size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">架构总结：交易中台赋能</h5>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        通过<span className="text-emerald-600 font-bold">“交易中台”</span>向上对接通盘供应链，向下通过“酒店智能体”等分销模型，实现商品与服务的快速上架与分销变现。
                      </p>
                    </div>

                    {/* 进度说明 */}
                    <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                          <Zap size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">当前进度：开发联调中</h5>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        预计 <span className="text-blue-600 font-bold">2月10日</span> 完成开发测试，届时将实现从“对话咨询”到“下单交易”的直连。
                      </p>
                      <ProgressBar label="电商体系建设进度" percentage={80} color="bg-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 sticky top-32">
                <div className="relative mx-auto w-[300px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl">
                  <img src="/131new/image/2-5.png" alt="电商交易闭环截图" className="w-full h-auto block" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 第三大部分：面向个人的劳动者智能体 */}
        <Section id="personal" title="三、面向个人的劳动者智能体" icon={Users} gradient="from-violet-600 to-fuchsia-600">
          <div className="mb-24 bg-slate-50 rounded-[48px] p-12 border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">个体赋能：打造数字世界的“第二分身”</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-4xl">
              为每一位劳动者构建专属智能体，不仅是工作助手，更是能够自主执行任务、管理资源、甚至进行商业变现的数字化身。通过“技能封装”与“经验模型化”，让个体的生产力实现指数级增长。
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-sm mb-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                
                <h4 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3 relative z-10">
                  <PenTool className="text-violet-600" size={32} /> 个人劳动者智能体核心价值
                </h4>
                
                <div className="space-y-10 relative z-10">
                  {[
                    {
                      title: "经验资产化",
                      desc: "将个人的专业技能与知识沉淀为可调用的智能体模型，实现“知识复用”。",
                      icon: Lightbulb
                    },
                    {
                      title: "自主任务执行",
                      desc: "智能体可独立处理日常繁琐事务，如日程安排、信息筛选、初步方案撰写等。",
                      icon: Zap
                    },
                    {
                      title: "多平台触达",
                      desc: "支持一键发布至微信、抖音、小红书等社交平台，作为个体的数字代言人。",
                      icon: Share2
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 p-6 hover:bg-slate-50 rounded-[32px] transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center shrink-0">
                        <item.icon size={28} />
                      </div>
                      <div>
                        <h5 className="text-xl font-black text-slate-900 mb-2">{item.title}</h5>
                        <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-32">
              <div className="relative mx-auto w-[300px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200 group transition-all hover:shadow-2xl">
                <img src="/131new/image/3-1.png" alt="个人智能体交互界面" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Cpu size={28} />
              </div>
              <span className="font-black text-3xl tracking-tighter text-slate-900">AI STRATEGIC REPORT</span>
            </div>
            <p className="text-slate-500 font-bold text-xl max-w-sm text-center md:text-left leading-relaxed">
              构筑 AI 超级应用，定义数字化未来的新样板。
            </p>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-6">
              <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-400">板块导航</span>
              <a href="#strategy" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">一、核心战略</a>
              <a href="#enterprise" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">二、企业方案</a>
              <a href="#personal" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">三、个人智能体</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-400">资源链接</span>
              <a href="#" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">架构图谱</a>
              <a href="#" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">设计规范</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-black text-sm tracking-[0.2em] uppercase">© 2026 AI STRATEGY GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Share2 className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" size={24} />
            <Settings className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" size={24} />
            <Globe className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
