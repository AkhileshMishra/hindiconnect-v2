import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? `animate-fade-in-up ${delay}` : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

export default function Blog() {
  const { posts } = useContent();
  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-hindi-blue to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-300 max-w-lg mx-auto">Insights, strategies, and tips for Hindi learners from our expert team</p>
        </div>
      </section>

      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length > 0 && (
            <>
              {/* Featured post */}
              <Reveal>
                <Link to={`/blog/${posts[0].id}`} className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 mb-10">
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto bg-gray-100 overflow-hidden">
                      <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span className="bg-saffron/10 text-saffron font-medium px-3 py-1 rounded-full">{posts[0].category}</span>
                        <span>{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-hindi-blue group-hover:text-saffron transition-colors mb-3">{posts[0].title}</h2>
                      <p className="text-gray-500 line-clamp-3 mb-4">{posts[0].excerpt}</p>
                      <span className="text-saffron font-medium text-sm">Read More &rarr;</span>
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Remaining posts */}
              <div className="grid md:grid-cols-3 gap-6">
                {posts.slice(1).map((p, i) => (
                  <Reveal key={p.id} delay={`delay-${(i % 3 + 1) * 100}`}>
                    <Link to={`/blog/${p.id}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full">
                      <div className="h-48 bg-gray-100 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span className="text-saffron font-medium">{p.category}</span>
                          <span>{new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <h2 className="font-semibold text-hindi-blue group-hover:text-saffron transition-colors mb-2">{p.title}</h2>
                        <p className="text-sm text-gray-500 line-clamp-3">{p.excerpt}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
          {posts.length === 0 && <p className="text-center text-gray-400 py-20">No blog posts yet.</p>}
        </div>
      </section>
    </div>
  );
}
