import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Clock, BookOpen, Award } from 'lucide-react';
import { courses } from '../data/content';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? `animate-fade-in-up ${delay}` : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-hindi-blue to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-gray-300 max-w-lg mx-auto">Structured programs designed by language experts for every age and proficiency level</p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Small Groups', desc: 'Max 5 students per class' },
              { icon: Clock, label: 'Flexible Schedule', desc: 'Classes that fit your time' },
              { icon: BookOpen, label: 'Custom Materials', desc: 'Worksheets, audio & video' },
              { icon: Award, label: 'Certified Teachers', desc: 'Qualified native speakers' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={`delay-${(i + 1) * 100}`}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-saffron" />
                  </div>
                  <h3 className="font-semibold text-hindi-blue text-sm">{item.label}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((c, i) => (
              <Reveal key={c.id} delay={`delay-${(i % 2 + 1) * 100}`}>
                <div className={`rounded-2xl overflow-hidden h-full flex flex-col ${c.highlight ? 'bg-hindi-blue text-white ring-2 ring-saffron' : 'bg-white'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  {c.image && <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="text-4xl mb-4">{c.icon}</div>
                    <h2 className={`font-display text-2xl font-bold ${c.highlight ? '' : 'text-hindi-blue'}`}>{c.title}</h2>
                    <p className={`text-sm mb-4 ${c.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{c.subtitle}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{c.price}</span>
                      <span className={`text-sm ${c.highlight ? 'text-gray-300' : 'text-gray-400'}`}>{c.period}</span>
                    </div>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {c.features.map(f => (
                        <li key={f} className={`text-sm flex items-start gap-2 ${c.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${c.highlight ? 'text-saffron' : 'text-hindi-green'}`} /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href={`https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(c.title)}%20course`}
                      target="_blank" rel="noreferrer"
                      className={`flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all duration-200 ${c.highlight ? 'bg-saffron text-white hover:bg-saffron-dark' : 'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white'}`}>
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-hindi-blue mb-4">Not Sure Which Course Is Right?</h2>
            <p className="text-gray-500 mb-6">Book a free consultation and we will assess your level and recommend the perfect program for you.</p>
            <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20need%20help%20choosing%20a%20course" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3.5 rounded-full font-medium hover:bg-saffron-dark transition-all duration-200 shadow-lg shadow-saffron/25 hover:-translate-y-0.5">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
