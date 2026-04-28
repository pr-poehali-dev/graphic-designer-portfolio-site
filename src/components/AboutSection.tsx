import Icon from '@/components/ui/icon';

const skills = [
  { name: 'Adobe After Effects', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Figma', level: 88 },
  { name: 'Cinema 4D', level: 75 },
  { name: 'Adobe Premiere Pro', level: 80 },
  { name: 'Photoshop', level: 92 },
];

const awards = [
  { icon: 'Award', text: 'Awwwards — Site of the Day' },
  { icon: 'Star', text: 'Behance Featured' },
  { icon: 'Trophy', text: 'CSS Design Awards' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-brand" />
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Обо мне</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Создаю визуальные<br />
              <span className="text-gradient">впечатления</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6 text-lg">
              Привет! Меня зовут Алекс — графический и моушн-дизайнер с более чем 5-летним опытом. Специализируюсь на создании айдентики брендов, motion graphics и анимационного контента.
            </p>
            <p className="text-white/40 leading-relaxed mb-10">
              Моя цель — не просто красиво оформить идею, а сделать так, чтобы она работала: привлекала внимание, передавала эмоцию и запоминалась надолго.
            </p>

            {/* Awards */}
            <div className="flex flex-wrap gap-3">
              {awards.map(award => (
                <div key={award.text} className="glass rounded-full px-4 py-2 flex items-center gap-2">
                  <Icon name={award.icon as 'Award'} size={14} className="text-purple-400" />
                  <span className="text-xs text-white/60">{award.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skills */}
          <div className="space-y-5">
            {skills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white/70">{skill.name}</span>
                  <span className="text-sm font-semibold text-gradient">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-brand transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
