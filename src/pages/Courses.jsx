import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { courses } from '../data/content';

export default function Courses() {
  return (
    <div className="py-20 bg-warm-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl font-bold text-hindi-blue mb-3">Our Courses</h1>
          <p className="text-gray-500 max-w-lg mx-auto">Structured programs designed by language experts for every age and proficiency level</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map(c => (
            <div key={c.id} className={`rounded-2xl p-8 ${c.highlight ? 'bg-hindi-blue text-white ring-2 ring-saffron' : 'bg-white'} hover:shadow-xl transition-shadow`}>
              <div className="text-4xl mb-4">{c.icon}</div>
              <h2 className={`font-display text-2xl font-bold ${c.highlight ? '' : 'text-hindi-blue'}`}>{c.title}</h2>
              <p className={`text-sm mb-4 ${c.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{c.subtitle}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{c.price}</span>
                <span className={`text-sm ${c.highlight ? 'text-gray-300' : 'text-gray-400'}`}>{c.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {c.features.map(f => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${c.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${c.highlight ? 'text-saffron' : 'text-hindi-green'}`} /> {f}
                  </li>
                ))}
              </ul>
              <a href={`https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(c.title)}%20course`}
                target="_blank" rel="noreferrer"
                className={`block text-center py-3 rounded-full font-medium transition-colors ${c.highlight ? 'bg-saffron text-white hover:bg-saffron-dark' : 'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white'}`}>
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
