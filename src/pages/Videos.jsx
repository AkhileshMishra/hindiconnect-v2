import { useContent } from '../context/ContentContext';

export default function Videos() {
  const { videos } = useContent();
  return (
    <div className="py-20 bg-warm-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl font-bold text-hindi-blue mb-3">Video Lessons</h1>
          <p className="text-gray-500">Watch and learn with our curated Hindi video content</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map(v => (
            <div key={v.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-900">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title}
                  className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="p-5">
                <span className="text-xs text-saffron font-medium">{v.category}</span>
                <h3 className="font-semibold text-hindi-blue mt-1 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
        {videos.length === 0 && <p className="text-center text-gray-400 py-20">No videos yet.</p>}
      </div>
    </div>
  );
}
