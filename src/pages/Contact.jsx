import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? `animate-fade-in-up ${delay}` : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-hindi-blue to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-lg mx-auto">We would love to hear from you. Reach out and let us start your Hindi journey.</p>
        </div>
      </section>

      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-5">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-hindi-blue mb-6">Get in Touch</h2>
              </Reveal>
              {[
                { icon: MessageCircle, label: 'WhatsApp', value: '+65 8690 0960', href: 'https://api.whatsapp.com/send?phone=6586900960&text=Hello', desc: 'Fastest way to reach us' },
                { icon: Mail, label: 'Email', value: 'Namaste@hindiconnect.com', href: 'mailto:Namaste@hindiconnect.com', desc: 'We reply within 24 hours' },
                { icon: Phone, label: 'Phone', value: '+65 8690 0960', href: 'tel:+6586900960', desc: 'Mon-Sat, 9am-6pm SGT' },
              ].map((c, i) => (
                <Reveal key={c.label} delay={`delay-${(i + 1) * 100}`}>
                  <a href={c.href} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-saffron" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                      <div className="font-medium text-hindi-blue">{c.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{c.desc}</div>
                    </div>
                  </a>
                </Reveal>
              ))}

              <Reveal delay="delay-400">
                <div className="p-5 bg-white rounded-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-saffron" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Singapore Office</div>
                      <div className="font-medium text-hindi-blue text-sm">100 Tras Street, #16-01, Amara Corporate Tower, Singapore 079027</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 ml-16">
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">India Office</div>
                      <div className="font-medium text-hindi-blue text-sm">273, Satra Plaza, Plot 19, Sector 19D, Vashi, Navi Mumbai 400703</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay="delay-500">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white rounded-xl text-center">
                    <Clock className="w-5 h-5 text-saffron mx-auto mb-2" />
                    <div className="text-xs font-medium text-hindi-blue">Office Hours</div>
                    <div className="text-xs text-gray-400 mt-0.5">Mon-Sat, 9am-6pm SGT</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl text-center">
                    <Globe className="w-5 h-5 text-saffron mx-auto mb-2" />
                    <div className="text-xs font-medium text-hindi-blue">Serving Globally</div>
                    <div className="text-xs text-gray-400 mt-0.5">10+ countries worldwide</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact form */}
            <Reveal delay="delay-200">
              <form onSubmit={e => { e.preventDefault(); alert('Thank you! We will get back to you soon.'); e.target.reset(); }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h2 className="font-display text-xl font-bold text-hindi-blue mb-6">Send us a message</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input required type="text" placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input required type="email" placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone (with country code)</label>
                    <input type="tel" placeholder="+65 8690 0960"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm transition-all">
                      <option>Free Consultation</option>
                      <option>Academic Excellence Course</option>
                      <option>Spoken Hindi for Kids</option>
                      <option>Spoken Hindi for Adults</option>
                      <option>Trial Class Inquiry</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Learner's Age</label>
                    <input type="number" placeholder="Enter age"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea required rows={4} placeholder="Tell us about your learning goals..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron text-sm resize-none transition-all" />
                  </div>
                  <button type="submit"
                    className="w-full bg-saffron text-white py-3 rounded-lg font-medium hover:bg-saffron-dark transition-all duration-200 hover:shadow-lg hover:shadow-saffron/25">
                    Send Message
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
