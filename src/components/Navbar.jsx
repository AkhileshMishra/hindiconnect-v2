import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/blog', label: 'Blog' },
    { to: '/videos', label: 'Videos' },
    { to: '/ai-assessment', label: 'AI Assessment' },
    { to: '/contact', label: 'Contact' },
  ];

  const active = (to) => pathname === to ? 'text-saffron font-semibold' : 'text-gray-700 hover:text-saffron';

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://hindiconnect.com/wp-content/uploads/2023/10/Logo.png" alt="HindiConnect" className="h-10" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`text-sm transition-colors ${active(l.to)}`}>{l.label}</Link>
            ))}
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/admin" className="text-sm text-hindi-green font-medium hover:underline">Admin</Link>
                <button onClick={logout} className="text-sm text-gray-500 hover:text-red-500">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="text-sm text-gray-500 hover:text-saffron">Admin Login</Link>
            )}
            <a href="https://api.whatsapp.com/send?phone=6586900960&text=Hello,%20I%20have%20a%20question%20about%20HindiConnect" target="_blank" rel="noreferrer"
              className="bg-saffron text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-saffron-dark transition-colors">
              Free Consultation
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block py-2 text-sm ${active(l.to)}`}>{l.label}</Link>
          ))}
          {user ? (
            <>
              <Link to="/admin" onClick={() => setOpen(false)} className="block py-2 text-sm text-hindi-green font-medium">Admin Panel</Link>
              <button onClick={() => { logout(); setOpen(false); }} className="block py-2 text-sm text-red-500">Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-500">Admin Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
