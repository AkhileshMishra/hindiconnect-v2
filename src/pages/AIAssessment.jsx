import { Bot, Brain, BarChart3, Mic, CheckCircle, Sparkles } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Bot className="w-4 h-4" /> Coming Soon — 2026
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">AI-Powered Auto Assessments</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We're building an intelligent assessment engine that will revolutionize how you learn Hindi — with personalized diagnostics, adaptive curricula, and real-time AI mentoring.
          </p>
          <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/30 text-saffron px-6 py-3 rounded-full font-medium">
            <Sparkles className="w-5 h-5" /> Join the Waitlist — Be the First to Experience It
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-hindi-blue mb-3">What's Coming</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Cutting-edge AI features designed for personalized and better Hindi mentoring</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-saffron/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
                  <f.icon className="w-6 h-6 text-saffron" />
                </div>
                <h3 className="font-semibold text-hindi-blue text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-hindi-blue mb-4">Stay Updated</h2>
          <p className="text-gray-500 mb-6">Be the first to know when AI assessments launch. Drop your email below.</p>
          <form onSubmit={e => { e.preventDefault(); alert('Thank you! We\'ll notify you when AI assessments launch.'); }} className="flex gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 text-sm" />
            <button type="submit" className="bg-saffron text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-saffron-dark transition-colors">Notify Me</button>
          </form>
        </div>
      </section>
    </div>
  );
}
