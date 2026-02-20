import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hindi-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://hindiconnect.com/wp-content/uploads/2023/10/Logo.png" alt="HindiConnect" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A brand of Gurukul Pte Ltd, Singapore. Empowering learners to master Hindi across the globe with qualified native teachers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-saffron">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <Link to="/courses" className="block hover:text-white transition-colors">Courses</Link>
              <Link to="/blog" className="block hover:text-white transition-colors">Blog</Link>
              <Link to="/videos" className="block hover:text-white transition-colors">Videos</Link>
              <Link to="/ai-assessment" className="block hover:text-white transition-colors">AI Assessment</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-saffron">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><span>+65 8690 0960</span></div>
              <div className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /><span>Namaste@hindiconnect.com</span></div>
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>100 Tras Street, #16-01, Amara Corporate Tower, Singapore 079027</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-saffron">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/LearnHindiEasily/', label: 'Facebook' },
                { href: 'https://www.youtube.com/channel/UCTZvJkBjBY00MZhIGjxTNOQ', label: 'YouTube' },
                { href: 'https://www.instagram.com/hindiconnect/', label: 'Instagram' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium hover:bg-saffron transition-colors">
                  {s.label[0]}
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-1 text-xs text-gray-400">
              <Link to="/privacy" className="block hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="block hover:text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HindiConnect — Gurukul Pte Ltd. All rights reserved. UEN: 201203736E
        </div>
      </div>
    </footer>
  );
}
