import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 bg-warm-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl font-bold text-hindi-blue mb-3">Contact Us</h1>
          <p className="text-gray-500">We'd love to hear from you. Reach out and let's start your Hindi journey.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: MessageCircle, label: 'WhatsApp', value: '+65 8690 0960', href: 'https://api.whatsapp.com/send?phone=6586900960&text=Hello' },
              { icon: Mail, label: 'Email', value: 'Namaste@hindiconnect.com', href: 'mailto:Namaste@hindiconnect.com' },
              { icon: Phone, label: 'Phone', value: '+65 8690 0960', href: 'tel:+6586900960' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                  <div className="font-medium text-hindi-blue">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-saffron" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Singapore Office</div>
                <div className="font-medium text-hindi-blue text-sm">100 Tras Street, #16-01, Amara Corporate Tower, Singapore 079027</div>
                <div className="text-xs text-gray-400 mt-3 mb-0.5">India Office</div>
                <div className="font-medium text-hindi-blue text-sm">273, Satra Plaza, Plot 19, Sector 19D, Vashi, Navi Mumbai 400703</div>
              </div>
            </div>
          </div>

          <form onSubmit={e => { e.preventDefault(); alert('Thank you! We\'ll get back to you soon.'); e.target.reset(); }} className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-hindi-blue mb-6">Send us a message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 text-sm">
                  <option>Trial Class Inquiry</option>
                  <option>Academic Excellence Course</option>
                  <option>Spoken Hindi for Kids</option>
                  <option>Spoken Hindi for Adults</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 text-sm resize-none" />
              </div>
              <button type="submit" className="w-full bg-saffron text-white py-3 rounded-lg font-medium hover:bg-saffron-dark transition-colors">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
