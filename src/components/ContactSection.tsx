import { useState } from 'react';
import Icon from '@/components/ui/icon';

const socials = [
  { icon: 'Instagram', label: 'Instagram', handle: '@alexdesign', href: '#' },
  { icon: 'Linkedin', label: 'Behance', handle: 'behance/alexdesign', href: '#' },
  { icon: 'Send', label: 'Telegram', handle: '@alexdesign', href: '#' },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-brand" />
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Контакты</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Есть идея?<br />
              <span className="text-gradient">Давай обсудим</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 text-lg">
              Готов к новым проектам и коллаборациям. Напиши мне — отвечу в течение 24 часов.
            </p>

            {/* Social links */}
            <div className="space-y-3 mb-10">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-4 glass rounded-xl px-5 py-4 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Icon name={social.icon as 'Send'} size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {social.label}
                    </div>
                    <div className="text-xs text-white/40">{social.handle}</div>
                  </div>
                  <Icon name="ArrowRight" size={14} className="text-white/30 group-hover:text-white/60 ml-auto transition-colors" />
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-white/50">
              <Icon name="Mail" size={18} className="text-purple-400" />
              <a href="mailto:hello@alexdesign.com" className="hover:text-white transition-colors text-sm">
                hello@alexdesign.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center">
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Сообщение отправлено!
                </h3>
                <p className="text-white/50 text-sm">Я свяжусь с вами в течение 24 часов</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Иван Петров"
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 text-sm outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="ivan@company.com"
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 text-sm outline-none focus:border-purple-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Расскажите о своём проекте..."
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 text-sm outline-none focus:border-purple-500/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-brand text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Отправить сообщение
                  <Icon name="Send" size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
