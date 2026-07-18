import { useLanguage } from '../contexts/LanguageContext'
import { COMPLIANT_COUNTRIES } from '../data/tokens'

export default function RegionsCoverage() {
  const { t } = useLanguage()

  const priority = COMPLIANT_COUNTRIES.slice(0, 8)
  const supported = COMPLIANT_COUNTRIES.slice(8)

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="text-center py-12">
        <h2 className="text-3xl font-black mb-3">
          <span className="gradient-text">{t.regions.title}</span>
        </h2>
        <p className="text-gray-400 text-sm">{t.regions.subtitle}</p>
      </div>

      {/* Priority */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          {t.regions.priority}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {priority.map(c => (
            <div key={c.code} className="glass-card rounded-xl p-3 flex items-center gap-2 hover:border-green-500/30 transition-all cursor-default">
              <span className="text-xl">{c.flag}</span>
              <div>
                <div className="text-xs font-semibold text-gray-200">{c.name}</div>
                <div className="text-xs text-gray-500">{c.code}</div>
              </div>
              <div className="ml-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supported */}
      <div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          {t.regions.supported}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2">
          {supported.map(c => (
            <div key={c.code} className="glass-card rounded-xl p-2.5 flex items-center gap-1.5 hover:border-white/30 transition-all cursor-default">
              <span className="text-lg">{c.flag}</span>
              <div>
                <div className="text-xs font-medium text-gray-300">{c.name.split(' ')[0]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
