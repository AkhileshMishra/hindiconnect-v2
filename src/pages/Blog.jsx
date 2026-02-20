import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export default function Blog() {
  const { posts } = useContent();
  return (
    <div className="py-20 bg-warm-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl font-bold text-hindi-blue mb-3">Blog</h1>
          <p className="text-gray-500">Insights, strategies, and tips for Hindi learners</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
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
          ))}
        </div>
        {posts.length === 0 && <p className="text-center text-gray-400 py-20">No blog posts yet.</p>}
      </div>
    </div>
  );
}
