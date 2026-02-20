import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/videos', label: 'Videos' },
    { to: '/blog', label: 'Blog' },
    { to: '/ai-assessment', label: 'AI Assessment' },
    { to: '/contact', label: 'Contact' },
  ];

  const active = (to) => pathname === to ? 'text-saffron font-semibold' : 'text-gray-700 hover:text-saffron';

  return (
    <>
      {/* Top info bar */}
      <div className="bg-hindi-blue text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Gurukul Pte Ltd, 100 Tras Street, #16-01, Amara Corporate Tower, Singapore 079027</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+6586900960" className="flex items-center gap-1.5 hover:text-saffron transition-colors"><Phone className="w-3 h-3" /> +65 8690 0960</a>
            <a href="mailto:Namaste@hindiconnect.com" className="flex items-center gap-1.5 hover:text-saffron transition-colors"><Mail className="w-3 h-3" /> Namaste@hindiconnect.com</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src="/logo.png" alt="HindiConnect" className="h-12" />
            </Link>

            <div className="hidden lg:flex items-center gap-5">
              {links.map(l => (
                <Link key={l.to} to={l.to} className={`text-sm transition-colors duration-200 ${active(l.to)}`}>{l.label}</Link>
              ))}
              {user ? (
                <div className="flex items-center gap-3">
                  <Link to="/admin" className="text-sm text-hindi-green font-medium hover:underline">Admin</Link>
                  <button onClick={logout} className="text-sm text-gray-500 hover:text-red-500">Logout</button>
                </div>
              ) : null}
              <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noreferrer"
                className="bg-saffron text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-saffron-dark transition-all duration-200 hover:shadow-lg hover:shadow-saffron/25 hover:-translate-y-0.5">
                Free Consultation
              </a>
            </div>

            <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 border-t' : 'max-h-0'}`}>
          <div className="bg-white px-4 pb-4 pt-2 space-y-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`block py-2.5 text-sm ${active(l.to)}`}>{l.label}</Link>
            ))}
            {user && (
              <>
                <Link to="/admin" className="block py-2.5 text-sm text-hindi-green font-medium">Admin Panel</Link>
                <button onClick={logout} className="block py-2.5 text-sm text-red-500">Logout</button>
              </>
            )}
            <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noreferrer"
              className="block text-center bg-saffron text-white py-2.5 rounded-full text-sm font-medium mt-2">
              Free Consultation
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
