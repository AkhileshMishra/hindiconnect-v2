import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Globe, Sparkles, Bot, CheckCircle, Play, X, ChevronDown, ChevronRight, Award, Clock, Video, Headphones } from 'lucide-react';
import { testimonials, courses, introVideoId, faqs } from '../data/content';
import { useContent } from '../context/ContentContext';
import { useInView } from '../hooks/useInView';

/* ─── Scroll-animated wrapper ─── */
function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? `animate-fade-in-up ${delay}` : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Hero with Introduction Video ─── */
function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-cream overflow-hidden">
      {/* Decorative Hindi characters */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-20 left-10 text-[200px] font-hindi text-saffron">अ</div>
        <div className="absolute bottom-10 right-20 text-[150px] font-hindi text-hindi-blue">ह</div>
        <div className="absolute top-40 right-40 text-[120px] font-hindi text-saffron">क</div>
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-saffron/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-hindi-blue/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Trusted by 500+ Students Worldwide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-hindi-blue leading-tight mb-6">
              Learn <span className="text-gradient-saffron">हिंदी</span> With<br />Qualified Native Teachers
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Academic Hindi excellence for Kindergarten to Class X. Spoken Hindi for adults and kids. Small groups, personalized learning, real results.
            </p>

            {/* Steps preview */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: BookOpen, text: 'Get evaluation & learning plan' },
                { icon: Users, text: 'Native teacher, groups < 5' },
                { icon: Headphones, text: 'Custom worksheets, audio & video' },
                { icon: Award, text: 'Milestone-based progress' },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <s.icon className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                  <span>{s.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3.5 rounded-full font-medium hover:bg-saffron-dark transition-all duration-200 shadow-lg shadow-saffron/25 hover:-translate-y-0.5">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-hindi-blue text-hindi-blue px-8 py-3.5 rounded-full font-medium hover:bg-hindi-blue hover:text-white transition-all duration-200">
                Book Free Consultation
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 500+ Students</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> 4.9 Rating</span>
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> 10+ Countries</span>
            </div>
          </div>

          {/* Right: Introduction Video */}
          <div className="animate-slide-in-right delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-saffron/10 group cursor-pointer"
              onClick={() => setShowVideo(true)}>
              <img
                src={`https://img.youtube.com/vi/${introVideoId}/maxresdefault.jpg`}
                alt="Watch our introduction video"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = `https://img.youtube.com/vi/${introVideoId}/hqdefault.jpg`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-saffron/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                  <img src="/logo.png" alt="" className="h-8" />
                  <div>
                    <div className="text-sm font-semibold text-hindi-blue">Watch Our Introduction</div>
                    <div className="text-xs text-gray-500">Learn about HindiConnect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 video-modal-overlay bg-black/70 animate-fade-in"
          onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-saffron transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${introVideoId}?autoplay=1&rel=0`}
                title="HindiConnect Introduction"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Animated Stats Counter ─── */
function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const num = parseFloat(target);
        const duration = 2000;
        const steps = 60;
        const increment = num / steps;
        let current = 0;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          current += increment;
          if (step >= steps) { setCount(num); clearInterval(timer); }
          else setCount(Math.floor(current * 10) / 10);
        }, duration / steps);
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const num = parseFloat(target);
  const display = Number.isInteger(num) ? Math.round(count) : count.toFixed(1);
  return <span ref={ref}>{display}{suffix}</span>;
}

function Stats() {
  const stats = [
    { icon: Users, value: '500', suffix: '+', label: 'Students Taught' },
    { icon: BookOpen, value: '10', suffix: '+', label: 'Years Experience' },
    { icon: Globe, value: '10', suffix: '+', label: 'Countries Served' },
    { icon: Star, value: '4.9', suffix: '', label: 'Average Rating' },
  ];
  return (
    <section className="bg-hindi-blue py-14 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-saffron rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-saffron rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={`delay-${(i + 1) * 100}`}>
            <div className="text-center">
              <s.icon className="w-7 h-7 text-saffron mx-auto mb-3" />
              <div className="text-4xl font-bold text-white">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-300 mt-1">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Learning Journey ─── */
function LearningJourney() {
  const steps = [
    { num: '01', title: 'Free Consultation', desc: 'Book a free session to discuss your goals and get an initial assessment', icon: '📞' },
    { num: '02', title: 'Evaluation', desc: 'Get a comprehensive assessment of your current Hindi level', icon: '📋' },
    { num: '03', title: 'Learning Plan', desc: 'Receive a personalized, milestone-based curriculum', icon: '📝' },
    { num: '04', title: 'Live Classes', desc: 'Learn with native teachers in small groups of under 5', icon: '👩‍🏫' },
    { num: '05', title: 'Practice & Materials', desc: 'Custom worksheets, audio, video, and speaking practice', icon: '📚' },
    { num: '06', title: 'Achieve Milestones', desc: 'Regular tests, progress tracking, and level advancement', icon: '🏆' },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">Your Learning Journey</h2>
            <p className="text-gray-500 max-w-lg mx-auto">A structured, proven path from beginner to fluent Hindi speaker</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={`delay-${(i % 3 + 1) * 100}`}>
              <div className="group p-6 rounded-2xl border border-gray-100 hover:border-saffron/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-bl-full group-hover:bg-saffron/10 transition-colors" />
                <div className="text-3xl mb-3">{s.icon}</div>
                <span className="text-xs font-bold text-saffron/60 tracking-wider">STEP {s.num}</span>
                <h3 className="font-semibold text-hindi-blue text-lg mt-1 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Courses Preview ─── */
function CoursesPreview() {
  return (
    <section className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">Our Courses</h2>
            <p className="text-gray-500">Choose the program that fits your learning goals</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={`delay-${(i + 1) * 100}`}>
              <div className={`rounded-2xl overflow-hidden h-full flex flex-col ${c.highlight ? 'bg-hindi-blue text-white ring-2 ring-saffron' : 'bg-white'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                {c.image && <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className={`font-semibold text-lg ${c.highlight ? 'text-white' : 'text-hindi-blue'}`}>{c.title}</h3>
                  <p className={`text-sm mb-4 ${c.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{c.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{c.price}</span>
                    <span className={`text-sm ${c.highlight ? 'text-gray-300' : 'text-gray-400'}`}>{c.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {c.features.slice(0, 4).map(f => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${c.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${c.highlight ? 'text-saffron' : 'text-hindi-green'}`} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/courses" className={`block text-center py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${c.highlight ? 'bg-saffron text-white hover:bg-saffron-dark' : 'border border-saffron text-saffron hover:bg-saffron hover:text-white'}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Video Testimonials ─── */
function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">What Our Community Says</h2>
            <p className="text-gray-500">Hear from parents, teachers, and students who are part of the HindiConnect family</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={`delay-${(i + 1) * 100}`}>
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Video thumbnail */}
                {t.youtubeId && (
                  <div className="relative cursor-pointer group" onClick={() => setActiveVideo(t.youtubeId)}>
                    <img
                      src={`https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}
                      alt={t.name}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-saffron/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
                  <div className="font-semibold text-hindi-blue text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 video-modal-overlay bg-black/70 animate-fade-in"
          onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-saffron transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Testimonial Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Video Showcase ─── */
function VideoShowcase() {
  const { videos } = useContent();
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(videos.map(v => v.category))];
  const filtered = filter === 'All' ? videos : videos.filter(v => v.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue">Video Lessons</h2>
              <p className="text-gray-500 mt-1">Watch our students and teachers in action</p>
            </div>
            <Link to="/videos" className="hidden md:inline-flex items-center gap-1 text-saffron font-medium text-sm hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat ? 'bg-saffron text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((v, i) => (
            <Reveal key={v.id} delay={`delay-${(i % 3 + 1) * 100}`}>
              <div className="bg-warm-gray rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-900 relative cursor-pointer group" onClick={() => setActiveVideo(v.youtubeId)}>
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-saffron/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-saffron font-medium">{v.category}</span>
                  <h3 className="font-semibold text-hindi-blue mt-1 mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{v.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/videos" className="inline-flex items-center gap-1 text-saffron font-medium text-sm hover:underline">
            View All Videos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 video-modal-overlay bg-black/70 animate-fade-in"
          onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-saffron transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video Lesson"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── AI Banner ─── */
function AIBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-hindi-blue to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" /> Coming Soon
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">AI-Powered Auto Assessments</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our upcoming AI assessment engine will analyze your pronunciation, grammar, vocabulary, and comprehension in real-time &mdash; delivering personalized feedback and adaptive learning paths.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                { title: 'Smart Diagnostics', desc: 'AI identifies your exact strengths and weak areas' },
                { title: 'Adaptive Learning', desc: 'Curriculum adjusts in real-time to your progress' },
                { title: 'Instant Feedback', desc: 'Get pronunciation and grammar corrections instantly' },
              ].map(f => (
                <div key={f.title} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-saffron mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/ai-assessment" className="inline-flex items-center gap-2 mt-8 bg-saffron text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-dark transition-all duration-200 hover:-translate-y-0.5">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FAQ Accordion ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 bg-warm-gray">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about learning Hindi with us</p>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i < 4 ? `delay-${(i + 1) * 100}` : ''}>
              <div className="bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-md">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-hindi-blue pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-saffron shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Blog Preview ─── */
function LatestPosts() {
  const { posts } = useContent();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-hindi-blue">Latest from Our Blog</h2>
              <p className="text-gray-500 mt-1">Insights, tips, and strategies for Hindi learners</p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-1 text-saffron font-medium text-sm hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={`delay-${(i + 1) * 100}`}>
              <Link to={`/blog/${p.id}`} className="group bg-warm-gray rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-saffron font-medium">{p.category}</span>
                  <h3 className="font-semibold text-hindi-blue mt-1 mb-2 group-hover:text-saffron transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-saffron to-saffron-light text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 text-[200px] font-hindi select-none">हिंदी</div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Hindi Journey?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ students across 10+ countries who are mastering Hindi with our qualified native teachers. Book your free consultation today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-saffron px-8 py-3.5 rounded-full font-medium hover:bg-cream transition-all duration-200 shadow-lg hover:-translate-y-0.5">
              Book Free Consultation <ChevronRight className="w-4 h-4" />
            </a>
            <Link to="/courses"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-saffron transition-all duration-200">
              View Courses
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <LearningJourney />
      <CoursesPreview />
      <VideoTestimonials />
      <VideoShowcase />
      <AIBanner />
      <FAQ />
      <LatestPosts />
      <CTABanner />
    </>
  );
}
