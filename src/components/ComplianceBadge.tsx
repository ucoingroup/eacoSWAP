import { useLanguage } from '../contexts/LanguageContext'

export default function ComplianceBadge() {
  const { t } = useLanguage()

  const items = [
    { label: t.compliance.kyoto, icon: '🏛️', color: 'text-blue-400' },
    { label: t.compliance.kyrgyz, icon: '📜', color: 'text-green-400' },
    { label: t.compliance.offshore, icon: '🌐', color: 'text-purple-400' },
    { label: t.compliance.audits, icon: '🔒', color: 'text-yellow-400' },
    { label: t.compliance.kyc, icon: '🛡️', color: 'text-pink-400' },
    { label: t.compliance.fatf, icon: '⚖️', color: 'text-orange-400' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="glass-card rounded-2xl p-6 border border-green-500/20">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-green-400">{t.compliance.title}</span>
          </div>
          <p className="text-gray-400 text-sm">{t.compliance.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map(item => (
            <div key={item.label} className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className={`text-xs font-medium ${item.color}`}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
