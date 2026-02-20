import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Play, X, Filter } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? `animate-fade-in-up ${delay}` : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

export default function Videos() {
  const { videos } = useContent();
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(videos.map(v => v.category))];
  const filtered = filter === 'All' ? videos : videos.filter(v => v.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-hindi-blue to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Video Lessons</h1>
          <p className="text-gray-300 max-w-lg mx-auto">Watch and learn with our curated Hindi video content — from grammar lessons to cultural immersion</p>
        </div>
      </section>

      <section className="py-12 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Filter className="w-4 h-4 text-gray-400 mr-1" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat ? 'bg-saffron text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v, i) => (
              <Reveal key={v.id} delay={i < 6 ? `delay-${(i % 3 + 1) * 100}` : ''}>
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gray-900 relative cursor-pointer group" onClick={() => setActiveVideo(v.youtubeId)}>
                    <img
                      src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-saffron/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-7 h-7 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-saffron text-white text-xs font-medium px-2.5 py-1 rounded-full">{v.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-hindi-blue mt-1 mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-gray-400 py-20">No videos in this category yet.</p>}
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 video-modal-overlay bg-black/70 animate-fade-in"
          onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-saffron transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video Lesson"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
