import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function BlogPost() {
  const { id } = useParams();
  const { posts } = useContent();
  const post = posts.find(p => p.id === id);

  if (!post) return (
    <div className="py-32 text-center min-h-screen bg-warm-gray">
      <h1 className="text-2xl font-bold text-gray-400 mb-4">Post not found</h1>
      <Link to="/blog" className="text-saffron hover:underline">&larr; Back to Blog</Link>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-hindi-blue to-indigo-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-saffron mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
            <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> {post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-lg" />
          )}
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
            {post.content}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {posts.filter(p => p.id !== id).length > 0 && (
        <section className="py-12 bg-warm-gray">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-hindi-blue mb-6">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.filter(p => p.id !== id).slice(0, 3).map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 bg-gray-100 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-saffron font-medium">{p.category}</span>
                    <h3 className="font-semibold text-hindi-blue mt-1 group-hover:text-saffron transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
