import { useLanguage } from '../contexts/LanguageContext'
import { REVENUE_STAKES } from '../data/tokens'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-16 pb-8 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="hidden sm:inline">{t.hero.badge}</span>
            <span className="sm:hidden">EACO Protocol</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            <span className="text-white">{t.hero.title1}</span>
            <br />
            <span className="gradient-text animate-gradient">{t.hero.title2}</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            {t.hero.subtitle}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#swap"
            className="btn-primary px-8 py-3.5 rounded-xl text-base font-bold text-white w-full sm:w-auto text-center"
          >
            {t.hero.cta}
          </a>
          <a
            href="#dashboard"
            className="px-8 py-3.5 rounded-xl text-base font-semibold border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto text-center"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {[
            { label: t.hero.stats.tokens, value: '3,000+', color: 'text-purple-400' },
            { label: t.hero.stats.volume24h, value: '$4.2M', color: 'text-green-400' },
            { label: t.hero.stats.users, value: '50K+', color: 'text-blue-400' },
            { label: t.hero.stats.chains, value: 'Solana', color: 'text-yellow-400' },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <div className={`text-2xl sm:text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reward Assets Visual */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
              {t.dashboard.fiveAssets}
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {REVENUE_STAKES.map((s, i) => (
              <div key={s.symbol} className="flex items-center gap-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border-2"
                  style={{ borderColor: s.color, color: s.color, backgroundColor: `${s.color}15` }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: s.color }}>{s.symbol}</div>
                  <div className="text-xs text-gray-500">{s.pct}%</div>
                </div>
                {i < REVENUE_STAKES.length - 1 && (
                  <div className="w-6 h-px bg-white/10 ml-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {t.hero.trusted}
          </div>
        </div>
      </div>
    </section>
  )
}
