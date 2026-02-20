import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import { Pencil, Trash2, Plus, FileText, Video, X } from 'lucide-react';

function PostForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { title: '', excerpt: '', content: '', category: 'Tips', date: new Date().toISOString().split('T')[0], image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', author: 'HindiConnect Team' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-hindi-blue">{initial ? 'Edit Post' : 'New Post'}</h3>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
      </div>
      <div className="space-y-3">
        <input placeholder="Title" value={form.title} onChange={e => set('title', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
        <input placeholder="Excerpt" value={form.excerpt} onChange={e => set('excerpt', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
        <textarea placeholder="Content (supports **bold**)" rows={6} value={form.content} onChange={e => set('content', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 resize-none" />
        <div className="grid grid-cols-3 gap-3">
          <input placeholder="Category" value={form.category} onChange={e => set('category', e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
          <input type="date" value={form.date} onChange={e => set('date', e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
          <input placeholder="Image URL" value={form.image} onChange={e => set('image', e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
        </div>
        <button onClick={() => form.title && onSave(form)} className="bg-saffron text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-saffron-dark transition-colors">Save</button>
      </div>
    </div>
  );
}

function VideoForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { title: '', description: '', youtubeId: '', category: 'Lesson' });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-hindi-blue">{initial ? 'Edit Video' : 'New Video'}</h3>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
      </div>
      <div className="space-y-3">
        <input placeholder="Title" value={form.title} onChange={e => set('title', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
        <input placeholder="Description" value={form.description} onChange={e => set('description', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="YouTube Video ID" value={form.youtubeId} onChange={e => set('youtubeId', e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
          <input placeholder="Category" value={form.category} onChange={e => set('category', e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50" />
        </div>
        <button onClick={() => form.title && onSave(form)} className="bg-saffron text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-saffron-dark transition-colors">Save</button>
      </div>
    </div>
  );
}

export default function Admin() {
  const { user } = useAuth();
  const { posts, videos, dispatch } = useContent();
  const [tab, setTab] = useState('posts');
  const [editing, setEditing] = useState(null); // null | 'new' | post/video object
  const [showForm, setShowForm] = useState(false);

  if (!user) return <Navigate to="/login" replace />;

  const handleSavePost = (data) => {
    if (editing && editing !== 'new') {
      dispatch({ type: 'UPDATE_POST', payload: { ...data, id: editing.id } });
    } else {
      dispatch({ type: 'ADD_POST', payload: data });
    }
    setEditing(null);
    setShowForm(false);
  };

  const handleSaveVideo = (data) => {
    if (editing && editing !== 'new') {
      dispatch({ type: 'UPDATE_VIDEO', payload: { ...data, id: editing.id } });
    } else {
      dispatch({ type: 'ADD_VIDEO', payload: data });
    }
    setEditing(null);
    setShowForm(false);
  };

  return (
    <div className="py-10 bg-warm-gray min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-display text-3xl font-bold text-hindi-blue">Admin Panel</h1>
          <div className="flex gap-2 bg-white rounded-lg p-1">
            <button onClick={() => { setTab('posts'); setShowForm(false); setEditing(null); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === 'posts' ? 'bg-saffron text-white' : 'text-gray-500 hover:text-gray-700'}`}>
              <FileText className="w-4 h-4" /> Posts
            </button>
            <button onClick={() => { setTab('videos'); setShowForm(false); setEditing(null); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === 'videos' ? 'bg-saffron text-white' : 'text-gray-500 hover:text-gray-700'}`}>
              <Video className="w-4 h-4" /> Videos
            </button>
          </div>
        </div>

        <button onClick={() => { setEditing('new'); setShowForm(true); }}
          className="mb-6 inline-flex items-center gap-1.5 bg-hindi-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-hindi-blue/90 transition-colors">
          <Plus className="w-4 h-4" /> Add {tab === 'posts' ? 'Post' : 'Video'}
        </button>

        {showForm && tab === 'posts' && (
          <div className="mb-6">
            <PostForm initial={editing !== 'new' ? editing : null} onSave={handleSavePost} onCancel={() => { setShowForm(false); setEditing(null); }} />
          </div>
        )}
        {showForm && tab === 'videos' && (
          <div className="mb-6">
            <VideoForm initial={editing !== 'new' ? editing : null} onSave={handleSaveVideo} onCancel={() => { setShowForm(false); setEditing(null); }} />
          </div>
        )}

        {tab === 'posts' && (
          <div className="space-y-3">
            {posts.map(p => (
              <div key={p.id} className="bg-white rounded-xl p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  {p.image && <img src={p.image} alt="" className="w-16 h-12 rounded-lg object-cover shrink-0" />}
                  <div className="min-w-0">
                    <h3 className="font-medium text-hindi-blue text-sm truncate">{p.title}</h3>
                    <p className="text-xs text-gray-400">{p.category} · {p.date}</p>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => { setEditing(p); setShowForm(true); }} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-saffron transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => { if (confirm('Delete this post?')) dispatch({ type: 'DELETE_POST', payload: p.id }); }}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {posts.length === 0 && <p className="text-center text-gray-400 py-10">No posts yet. Create your first one!</p>}
          </div>
        )}

        {tab === 'videos' && (
          <div className="space-y-3">
            {videos.map(v => (
              <div key={v.id} className="bg-white rounded-xl p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-medium text-hindi-blue text-sm truncate">{v.title}</h3>
                  <p className="text-xs text-gray-400">{v.category} · ID: {v.youtubeId}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => { setEditing(v); setShowForm(true); }} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-saffron transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => { if (confirm('Delete this video?')) dispatch({ type: 'DELETE_VIDEO', payload: v.id }); }}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {videos.length === 0 && <p className="text-center text-gray-400 py-10">No videos yet. Add your first one!</p>}
          </div>
        )}
      </div>
    </div>
  );
}
