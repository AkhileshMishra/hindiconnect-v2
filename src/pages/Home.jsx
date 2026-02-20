import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Globe, Sparkles, Bot, CheckCircle } from 'lucide-react';
import { testimonials, courses } from '../data/content';
import { useContent } from '../context/ContentContext';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cream via-white to-orange-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-hindi text-saffron select-none">अ</div>
        <div className="absolute bottom-10 right-20 text-[150px] font-hindi text-hindi-blue select-none">ह</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> AI-Powered Assessments Coming Soon
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-hindi-blue leading-tight mb-6">
            Master <span className="text-saffron">हिंदी</span> With<br />Qualified Native Teachers
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            Academic Hindi excellence for Kindergarten to Class X. Spoken Hindi for adults and kids. Small groups, personalized learning, real results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3.5 rounded-full font-medium hover:bg-saffron-dark transition-colors">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20want%20to%20book%20a%20trial%20class" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-hindi-blue text-hindi-blue px-8 py-3.5 rounded-full font-medium hover:bg-hindi-blue hover:text-white transition-colors">
              Book a Trial — ₹236
            </a>
          </div>
          <div className="flex items-center gap-6 mt-10 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 500+ Students</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> 4.9 Rating</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> 10+ Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { icon: Users, value: '500+', label: 'Students Taught' },
    { icon: BookOpen, value: '10+', label: 'Years Experience' },
    { icon: Globe, value: '10+', label: 'Countries Served' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];
  return (
    <section className="bg-hindi-blue py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <s.icon className="w-6 h-6 text-saffron mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{s.value}</div>
            <div className="text-sm text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LearningJourney() {
  const steps = [
    { num: '01', title: 'Evaluation', desc: 'Get a comprehensive assessment of your current Hindi level' },
    { num: '02', title: 'Learning Plan', desc: 'Receive a personalized, milestone-based curriculum' },
    { num: '03', title: 'Live Classes', desc: 'Learn with native teachers in small groups of under 5' },
    { num: '04', title: 'Practice', desc: 'Custom worksheets, audio, video, and speaking practice' },
    { num: '05', title: 'Assessment', desc: 'Regular tests to track progress and identify gaps' },
    { num: '06', title: 'Milestone', desc: 'Achieve fluency milestones and advance to the next level' },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">Your Learning Journey</h2>
          <p className="text-gray-500 max-w-lg mx-auto">A structured, proven path from beginner to fluent Hindi speaker</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.num} className="group p-6 rounded-2xl border border-gray-100 hover:border-saffron/30 hover:shadow-lg transition-all">
              <span className="text-4xl font-bold text-saffron/20 group-hover:text-saffron/40 transition-colors">{s.num}</span>
              <h3 className="font-semibold text-hindi-blue text-lg mt-2 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-hindi-blue to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" /> Coming Soon
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">AI-Powered Auto Assessments</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Our upcoming AI assessment engine will analyze your pronunciation, grammar, vocabulary, and comprehension in real-time — delivering personalized feedback and adaptive learning paths for better mentoring.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { title: 'Smart Diagnostics', desc: 'AI identifies your exact strengths and weak areas' },
              { title: 'Adaptive Learning', desc: 'Curriculum adjusts in real-time to your progress' },
              { title: 'Instant Feedback', desc: 'Get pronunciation and grammar corrections instantly' },
            ].map(f => (
              <div key={f.title} className="bg-white/5 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-saffron mb-2" />
                <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesPreview() {
  return (
    <section className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">Our Courses</h2>
          <p className="text-gray-500">Choose the program that fits your learning goals</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(c => (
            <div key={c.id} className={`rounded-2xl p-6 ${c.highlight ? 'bg-hindi-blue text-white ring-2 ring-saffron' : 'bg-white'} hover:shadow-xl transition-shadow`}>
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className={`font-semibold text-lg ${c.highlight ? 'text-white' : 'text-hindi-blue'}`}>{c.title}</h3>
              <p className={`text-sm mb-4 ${c.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{c.subtitle}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold">{c.price}</span>
                <span className={`text-sm ${c.highlight ? 'text-gray-300' : 'text-gray-400'}`}>{c.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {c.features.slice(0, 4).map(f => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${c.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${c.highlight ? 'text-saffron' : 'text-hindi-green'}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/courses" className={`block text-center py-2.5 rounded-full text-sm font-medium transition-colors ${c.highlight ? 'bg-saffron text-white hover:bg-saffron-dark' : 'border border-saffron text-saffron hover:bg-saffron hover:text-white'}`}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-3">What Our Students Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-cream rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">{Array.from({ length: t.rating }, (_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">"{t.text}"</p>
              <div className="font-semibold text-hindi-blue text-sm">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestPosts() {
  const { posts } = useContent();
  return (
    <section className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-hindi-blue">Latest from Our Blog</h2>
            <p className="text-gray-500 mt-1">Insights, tips, and strategies for Hindi learners</p>
          </div>
          <Link to="/blog" className="hidden md:inline-flex items-center gap-1 text-saffron font-medium text-sm hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map(p => (
            <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs text-saffron font-medium">{p.category}</span>
                <h3 className="font-semibold text-hindi-blue mt-1 mb-2 group-hover:text-saffron transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <LearningJourney />
      <AIBanner />
      <CoursesPreview />
      <Testimonials />
      <LatestPosts />
    </>
  );
}
