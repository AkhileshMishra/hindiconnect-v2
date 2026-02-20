import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function BlogPost() {
  const { id } = useParams();
  const { posts } = useContent();
  const post = posts.find(p => p.id === id);

  if (!post) return (
    <div className="py-32 text-center">
      <h1 className="text-2xl font-bold text-gray-400 mb-4">Post not found</h1>
      <Link to="/blog" className="text-saffron hover:underline">← Back to Blog</Link>
    </div>
  );

  return (
    <div className="py-20 bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-saffron mb-8"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
          <span className="text-saffron font-medium">{post.category}</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>by {post.author}</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-hindi-blue mb-6">{post.title}</h1>
        {post.image && <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8" />}
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed whitespace-pre-line">{post.content}</div>
      </article>
    </div>
  );
}
