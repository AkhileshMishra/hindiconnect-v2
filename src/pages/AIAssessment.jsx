import { Bot, Brain, BarChart3, Mic, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? `animate-fade-in-up ${delay}` : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

export default function AIAssessment() {
  const features = [
    { icon: Mic, title: 'Pronunciation Analysis', desc: 'AI listens to your spoken Hindi and provides real-time feedback on pronunciation accuracy, tone, and fluency.' },
    { icon: Brain, title: 'Adaptive Learning Paths', desc: 'The system continuously adapts your curriculum based on performance, focusing more on areas that need improvement.' },
    { icon: BarChart3, title: 'Progress Analytics', desc: 'Detailed dashboards showing your learning trajectory, strengths, weak areas, and predicted milestones.' },
    { icon: Bot, title: 'AI Conversation Partner', desc: 'Practice speaking Hindi with an AI tutor that simulates real conversations and corrects mistakes in real-time.' },
    { icon: CheckCircle, title: 'Automated Grammar Checks', desc: 'Write in Hindi and get instant grammar, gender, and case corrections with explanations.' },
    { icon: Sparkles, title: 'Personalized Recommendations', desc: 'Get custom worksheet, video, and reading recommendations based on your learning style and progress.' },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-hindi-blue to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Bot className="w-4 h-4" /> Coming Soon
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">AI-Powered Auto Assessments</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            We are building an intelligent assessment engine that will revolutionize how you learn Hindi &mdash; with personalized diagnostics, adaptive curricula, and real-time AI mentoring.
          </p>
          <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/30 text-saffron px-6 py-3 rounded-full font-medium animate-fade-in-up delay-200">
            <Sparkles className="w-5 h-5" /> Join the Waitlist &mdash; Be the First to Experience It
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl font-bold text-hindi-blue mb-3">What&apos;s Coming</h2>
              <p className="text-gray-500 max-w-lg mx-auto">Cutting-edge AI features designed for personalized and better Hindi mentoring</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={`delay-${(i % 3 + 1) * 100}`}>
                <div className="p-6 rounded-2xl border border-gray-100 hover:border-saffron/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
                    <f.icon className="w-6 h-6 text-saffron" />
                  </div>
                  <h3 className="font-semibold text-hindi-blue text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl font-bold text-hindi-blue mb-3">How It Will Work</h2>
              <p className="text-gray-500 max-w-lg mx-auto">A seamless AI-enhanced learning experience</p>
            </div>
          </Reveal>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Take the AI Assessment', desc: 'Complete a short diagnostic that evaluates your reading, writing, speaking, and listening skills.' },
              { step: '02', title: 'Get Your Learning Profile', desc: 'Receive a detailed breakdown of your strengths, weaknesses, and recommended focus areas.' },
              { step: '03', title: 'Follow Your Adaptive Path', desc: 'The AI creates a personalized curriculum that adjusts in real-time based on your progress.' },
              { step: '04', title: 'Practice with AI Tutor', desc: 'Engage in conversations, complete exercises, and get instant feedback from the AI partner.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={`delay-${(i + 1) * 100}`}>
                <div className="flex gap-6 items-start bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                    <span className="text-saffron font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-hindi-blue mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-hindi-blue mb-4">Stay Updated</h2>
            <p className="text-gray-500 mb-6">Be the first to know when AI assessments launch. Drop your email below.</p>
            <form onSubmit={e => { e.preventDefault(); alert('Thank you! We will notify you when AI assessments launch.'); e.target.reset(); }} className="flex gap-3 max-w-md mx-auto">
              <input type="email" required placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm transition-all" />
              <button type="submit" className="bg-saffron text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-saffron-dark transition-all duration-200 hover:shadow-lg hover:shadow-saffron/25">Notify Me</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
