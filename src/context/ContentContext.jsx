import { createContext, useContext, useReducer, useEffect } from 'react';
import { initialPosts, initialVideos } from '../data/content';

const ContentContext = createContext();

const load = (key, fallback) => {
  try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : fallback; }
  catch { return fallback; }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST': return { ...state, posts: [...state.posts, { ...action.payload, id: Date.now().toString() }] };
    case 'UPDATE_POST': return { ...state, posts: state.posts.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'DELETE_POST': return { ...state, posts: state.posts.filter(p => p.id !== action.payload) };
    case 'ADD_VIDEO': return { ...state, videos: [...state.videos, { ...action.payload, id: Date.now().toString() }] };
    case 'UPDATE_VIDEO': return { ...state, videos: state.videos.map(v => v.id === action.payload.id ? action.payload : v) };
    case 'DELETE_VIDEO': return { ...state, videos: state.videos.filter(v => v.id !== action.payload) };
    default: return state;
  }
};

export function ContentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    posts: load('hc_posts', initialPosts),
    videos: load('hc_videos', initialVideos),
  });

  useEffect(() => { localStorage.setItem('hc_posts', JSON.stringify(state.posts)); }, [state.posts]);
  useEffect(() => { localStorage.setItem('hc_videos', JSON.stringify(state.videos)); }, [state.videos]);

  return <ContentContext.Provider value={{ ...state, dispatch }}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);
