export const initialPosts = [
  {
    id: '1',
    title: 'What Do We Learn from Students Who Scored Well in Hindi?',
    excerpt: 'Key traits of high-performing Hindi students — hard work, active learning, ownership, and positive parent-child relationships.',
    content: `Several of our students scored well in Hindi. Here is a summary of what made them score high:\n\n**Hard-working:** There is no shortcut to success. When a student makes an effort — writing Hindi compositions weekly, sending audio assignments, self-correcting sentences — it pays off.\n\n**Actively seeking answers:** Students who understand their challenging areas like gender, case, and postposition, and actively seek exercises for those, perform better.\n\n**Ownership:** Students who are attentive and want to do well tend to revise their work and take ownership of their exam preparation.\n\n**Positive parent-child relationship:** Parents who actively engage with their child's learning journey see excellent results. Supportive involvement beats being pushy.`,
    category: 'Strategy',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    author: 'HindiConnect Team'
  },
  {
    id: '2',
    title: 'How to Select a Hindi Teacher?',
    excerpt: 'Finding the right Hindi teacher is crucial. Here are the key qualities to look for in a qualified instructor.',
    content: `Choosing the right Hindi teacher can make or break your learning journey. Here's what to look for:\n\n**Native fluency:** A teacher who speaks Hindi natively understands nuances that non-native speakers miss — tone, colloquialisms, and cultural context.\n\n**Pedagogical training:** Subject knowledge alone isn't enough. Look for teachers trained in language pedagogy who can structure lessons progressively.\n\n**Patience and adaptability:** Every learner is different. Great teachers adapt their methods to suit individual learning styles.\n\n**Cultural knowledge:** Hindi is deeply tied to Indian culture. Teachers who weave cultural context into lessons create richer learning experiences.`,
    category: 'Guide',
    date: '2024-12-10',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800',
    author: 'HindiConnect Team'
  },
  {
    id: '3',
    title: 'How to Learn Hindi When You Are Based Abroad?',
    excerpt: 'Practical strategies for mastering Hindi from anywhere in the world with online resources and native speaker practice.',
    content: `Learning Hindi while living abroad presents unique challenges, but also unique opportunities:\n\n**Consistent online classes:** Regular sessions with native teachers bridge the geographical gap. Small group sizes (under 5) ensure personalized attention.\n\n**Immersive media consumption:** Watch Hindi films, listen to Hindi podcasts, and follow Hindi social media accounts to build passive exposure.\n\n**Practice with native speakers:** Speaking with locals — even virtually — builds confidence and real-world fluency faster than textbook study alone.\n\n**Structured curriculum:** Follow a milestone-based program that tracks progress from preliminary to advanced levels systematically.`,
    category: 'Tips',
    date: '2024-11-28',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    author: 'HindiConnect Team'
  }
];

export const initialVideos = [
  {
    id: '1',
    title: 'दिनचर्या — Daily Routines in Hindi',
    description: 'A non-native student fluently describes her daily routine in Hindi, demonstrating practical conversational skills.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Student Showcase'
  },
  {
    id: '2',
    title: 'मेरा, मेरे, मेरी — My & Mine in Hindi',
    description: 'Learn the correct usage of possessive pronouns in Hindi with clear examples and common mistake corrections.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Grammar'
  },
  {
    id: '3',
    title: 'अतिथि से बातचीत — Talking to a Guest',
    description: 'Master the art of formal Hindi conversation with guests, including respectful forms of address.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Conversation'
  }
];

export const testimonials = [
  {
    name: 'Priya M.',
    role: 'Parent, Singapore',
    text: 'My daughter went from struggling with basic Hindi to scoring top marks in her PSLE Hindi exam. The teachers are incredibly patient and the structured approach works wonders.',
    rating: 5
  },
  {
    name: 'Rajesh K.',
    role: 'Adult Learner, Singapore',
    text: 'As someone who grew up speaking English, I always wanted to connect with my roots. HindiConnect made it possible — I can now confidently converse with my grandparents in Hindi.',
    rating: 5
  },
  {
    name: 'Meena S.',
    role: 'Teacher, Tamil Nadu',
    text: 'The pedagogy and curriculum design at HindiConnect is outstanding. As an educator myself, I appreciate the milestone-based approach and the quality of learning materials.',
    rating: 5
  },
  {
    name: 'David L.',
    role: 'Expat, Singapore',
    text: 'I started learning Hindi for work and fell in love with the language. The small group classes and native teachers make every session engaging and productive.',
    rating: 5
  }
];

export const courses = [
  {
    id: 'academic',
    title: 'Academic Excellence',
    subtitle: 'Kindergarten to Class X',
    price: '₹5,000',
    period: '/month',
    features: ['All education boards supported', 'Group size under 5 students', 'Live online classes', 'Milestone-based curriculum', 'Custom worksheets & materials', 'Regular assessments & tests', 'Progress reports for parents'],
    highlight: true,
    icon: '🎓'
  },
  {
    id: 'kids',
    title: 'Spoken Hindi for Kids',
    subtitle: 'Ages 5–15',
    price: '₹5,000',
    period: '/month',
    features: ['Preliminary to advanced levels', 'Group size under 5 students', 'Live online classes', 'Interactive learning materials', 'Practice with native speakers', 'Fun cultural activities', 'Regular progress tests'],
    highlight: false,
    icon: '🧒'
  },
  {
    id: 'adults',
    title: 'Spoken Hindi for Adults',
    subtitle: 'All proficiency levels',
    price: '₹5,000',
    period: '/month',
    features: ['Preliminary to advanced levels', 'Group size under 5 students', 'Live online classes', 'Business & conversational Hindi', 'Practice with native speakers', 'Cultural immersion sessions', 'Flexible scheduling'],
    highlight: false,
    icon: '👩‍💼'
  },
  {
    id: 'trial',
    title: 'Trial Class',
    subtitle: 'Experience HindiConnect',
    price: '₹236',
    period: ' one-time',
    features: ['1 live demo session', 'Meet your teacher', 'Assess your current level', 'Get a personalized learning plan', 'No commitment required'],
    highlight: false,
    icon: '✨'
  }
];
