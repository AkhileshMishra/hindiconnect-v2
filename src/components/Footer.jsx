import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hindi-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="HindiConnect" className="h-12 brightness-0 invert" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A brand of Gurukul Pte Ltd, Singapore. Empowering learners to master Hindi across the globe with qualified native teachers.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/LearnHindiEasily/" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/channel/UCTZvJkBjBY00MZhIGjxTNOQ" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/hindiconnect/" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-saffron">Quick Links</h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <Link to="/" className="block hover:text-white transition-colors">Home</Link>
              <Link to="/courses" className="block hover:text-white transition-colors">Courses</Link>
              <Link to="/videos" className="block hover:text-white transition-colors">Videos</Link>
              <Link to="/blog" className="block hover:text-white transition-colors">Blog</Link>
              <Link to="/ai-assessment" className="block hover:text-white transition-colors">AI Assessment</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-saffron">Our Programs</h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <Link to="/courses" className="block hover:text-white transition-colors">Academic Excellence</Link>
              <Link to="/courses" className="block hover:text-white transition-colors">Spoken Hindi for Kids</Link>
              <Link to="/courses" className="block hover:text-white transition-colors">Spoken Hindi for Adults</Link>
              <Link to="/courses" className="block hover:text-white transition-colors">Trial Class</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-saffron">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="tel:+6586900960" className="flex items-start gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /><span>+65 8690 0960</span>
              </a>
              <a href="mailto:Namaste@hindiconnect.com" className="flex items-start gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /><span>Namaste@hindiconnect.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>100 Tras Street, #16-01, Amara Corporate Tower, Singapore 079027</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} HindiConnect &mdash; Gurukul Pte Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
