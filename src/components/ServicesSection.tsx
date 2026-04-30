import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Layers',
    title: 'Брендинг & Айдентика',
    description: 'Логотипы, фирменный стиль, гайдлайны. Создаю визуальный язык, который работает на всех носителях.',
    tags: ['Логотип', 'Brandbook', 'Визитки'],
    gradient: 'from-purple-500/20 to-purple-900/10',
    glow: 'rgba(155,89,182,0.3)',
  },
  {
    icon: 'Play',
    title: 'Motion Design',
    description: 'Анимационные ролики, explainer-видео, motion graphics для соцсетей и презентаций.',
    tags: ['Анимация', 'Explainer', 'Reels'],
    gradient: 'from-pink-500/20 to-pink-900/10',
    glow: 'rgba(233,30,140,0.3)',
  },
  {
    icon: 'Monitor',
    title: 'UI/UX Дизайн',
    description: 'Интерфейсы мобильных и веб-приложений. От вайрфреймов до готовых макетов в Figma.',
    tags: ['Figma', 'Прототип', 'UX'],
    gradient: 'from-orange-500/20 to-orange-900/10',
    glow: 'rgba(255,107,53,0.3)',
  },
  {
    icon: 'Palette',
    title: 'Графический дизайн',
    description: 'Постеры, баннеры, упаковка, SMM-контент. Всё что должно выделяться и запоминаться.',
    tags: ['Постеры', 'SMM', 'Упаковка'],
    gradient: 'from-cyan-500/20 to-cyan-900/10',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: 'Film',
    title: 'Видеомонтаж',
    description: 'Монтаж и постпродакшн: рекламные ролики, корпоративные видео, YouTube-контент.',
    tags: ['Premiere', 'Color Grade', 'Реклама'],
    gradient: 'from-violet-500/20 to-violet-900/10',
    glow: 'rgba(139,92,246,0.3)',
  },
];

const ServicesSection = () => {
  const handleScroll = () => {
    const el = document.querySelector('#contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-brand" />
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Услуги</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Что я<br />
            <span className="text-gradient">умею делать</span>
          </h2>
          <p className="text-white/40 max-w-sm md:text-right text-sm leading-relaxed">
            Полный цикл визуальных коммуникаций — от концепции до финального файла
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(service => (
            <div
              key={service.title}
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${service.gradient} glass card-hover cursor-default overflow-hidden`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${service.glow} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center mb-5">
                  <Icon name={service.icon as 'Layers'} size={22} className="text-white/80" />
                </div>

                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/8 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={handleScroll}
            className="bg-gradient-brand text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
          >
            Обсудить проект
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;