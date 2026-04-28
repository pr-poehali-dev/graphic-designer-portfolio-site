import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (clientX / w - 0.5) * 30;
      const y = (clientY / h - 0.5) * 30;
      if (orb1.current) orb1.current.style.transform = `translate(${x}px, ${y}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${-x * 0.7}px, ${-y * 0.7}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background orbs */}
      <div
        ref={orb1}
        className="pointer-events-none absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, #9b59b6, transparent)' }}
      />
      <div
        ref={orb2}
        className="pointer-events-none absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, #ff6b35, transparent)' }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #e91e8c, transparent)' }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-white/70 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
          Открыт для новых проектов
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-white">Дизайн, который</span>
          <br />
          <span className="text-gradient">оживает</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Графический и моушн-дизайнер. Создаю визуальные истории — от статичной айдентики до живой анимации.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#portfolio')}
            className="bg-gradient-brand text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
          >
            Смотреть работы
          </button>
          <button
            onClick={() => handleScroll('#contacts')}
            className="glass text-white/80 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
          >
            Обсудить проект
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '5+', label: 'лет опыта' },
            { value: '120+', label: 'проектов' },
            { value: '40+', label: 'клиентов' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <Icon name="ChevronDown" size={16} className="text-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;
