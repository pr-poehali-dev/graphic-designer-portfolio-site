import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Category = 'all' | 'branding' | 'motion' | 'ui' | '3d';

interface Project {
  id: number;
  title: string;
  category: Category;
  tags: string[];
  color: string;
  emoji: string;
  year: string;
}

const filters: { key: Category; label: string }[] = [
  { key: 'all', label: 'Все работы' },
  { key: 'branding', label: 'Брендинг' },
  { key: 'motion', label: 'Motion' },
  { key: 'ui', label: 'UI/UX' },
  { key: '3d', label: '3D' },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'Neon Coffee — айдентика',
    category: 'branding',
    tags: ['Логотип', 'Фирмстиль'],
    color: 'from-purple-600/40 to-purple-900/60',
    emoji: '☕',
    year: '2024',
  },
  {
    id: 2,
    title: 'Prism — motion reel',
    category: 'motion',
    tags: ['After Effects', 'Анимация'],
    color: 'from-pink-600/40 to-rose-900/60',
    emoji: '🎬',
    year: '2024',
  },
  {
    id: 3,
    title: 'Fintech Dashboard',
    category: 'ui',
    tags: ['Figma', 'UX'],
    color: 'from-cyan-600/40 to-blue-900/60',
    emoji: '💳',
    year: '2023',
  },
  {
    id: 4,
    title: 'Arc Jewelry — 3D визуал',
    category: '3d',
    tags: ['Cinema 4D', 'Рендер'],
    color: 'from-amber-600/40 to-orange-900/60',
    emoji: '💎',
    year: '2024',
  },
  {
    id: 5,
    title: 'Vibe Records — брендинг',
    category: 'branding',
    tags: ['Логотип', 'Packaging'],
    color: 'from-emerald-600/40 to-teal-900/60',
    emoji: '🎵',
    year: '2023',
  },
  {
    id: 6,
    title: 'Meta Loop — explainer',
    category: 'motion',
    tags: ['Explainer', '2D'],
    color: 'from-violet-600/40 to-indigo-900/60',
    emoji: '🔮',
    year: '2024',
  },
  {
    id: 7,
    title: 'Bloom — мобильное приложение',
    category: 'ui',
    tags: ['iOS', 'Figma'],
    color: 'from-rose-600/40 to-pink-900/60',
    emoji: '🌸',
    year: '2023',
  },
  {
    id: 8,
    title: 'Orbit Chair — 3D реклама',
    category: '3d',
    tags: ['Cinema 4D', 'Продакт'],
    color: 'from-blue-600/40 to-indigo-900/60',
    emoji: '🪑',
    year: '2024',
  },
  {
    id: 9,
    title: 'Volt Energy — айдентика',
    category: 'branding',
    tags: ['Логотип', 'Гайдлайн'],
    color: 'from-yellow-600/40 to-orange-900/60',
    emoji: '⚡',
    year: '2023',
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>('all');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-brand" />
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Портфолио</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Избранные<br />
            <span className="text-gradient">работы</span>
          </h2>
          <p className="text-white/40 text-sm max-w-xs">
            {filtered.length} {active === 'all' ? 'проектов' : 'проект' + (filtered.length === 1 ? '' : 'а')} в галерее
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f.key
                  ? 'bg-gradient-brand text-white shadow-lg shadow-purple-500/20'
                  : 'glass text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(project => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                transform: hovered === project.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered === project.id ? '0 24px 60px rgba(155,89,182,0.25)' : '0 0 0 transparent',
              }}
            >
              {/* Visual area */}
              <div
                className={`relative h-56 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
              >
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
                }} />

                {/* Emoji */}
                <span
                  className="text-7xl transition-transform duration-500"
                  style={{ transform: hovered === project.id ? 'scale(1.15)' : 'scale(1)' }}
                >
                  {project.emoji}
                </span>

                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center gap-2 glass rounded-full px-5 py-2.5">
                    <Icon name="Eye" size={16} className="text-white" />
                    <span className="text-sm font-medium text-white">Смотреть</span>
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4 text-xs glass rounded-full px-3 py-1 text-white/60">
                  {project.year}
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 glass border-t-0 rounded-b-2xl" style={{ borderRadius: '0 0 1rem 1rem' }}>
                <h3
                  className="font-semibold text-white mb-2 text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/6 text-white/45">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 text-center">
          <button className="glass text-white/60 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 flex items-center gap-2 mx-auto">
            Загрузить ещё
            <Icon name="Plus" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
