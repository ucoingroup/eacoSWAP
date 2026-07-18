import { useLanguage } from '../contexts/LanguageContext'
import { REVENUE_PARTIES, REVENUE_STAKES } from '../data/tokens'

export default function RevenueDashboard() {
  const { t } = useLanguage()

  return (
    <section id="dashboard" className="max-w-7xl mx-auto px-4 pb-16">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-3xl sm:text-4xl font-black mb-3">
          <span className="gradient-text animate-gradient">{t.dashboard.title}</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">{t.dashboard.subtitle}</p>
      </div>

      {/* Revenue Model */}
      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-purple-400" />
          <span className="text-sm font-semibold text-gray-300">{t.dashboard.revenueModel}</span>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">{t.dashboard.revenueModelDesc}</p>
      </div>

      {/* Five Reward Assets */}
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          {t.dashboard.fiveAssets}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {REVENUE_STAKES.map(s => (
            <div key={s.symbol} className="glass-card rounded-xl p-4 text-center">
              <div
                className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-black border-2"
                style={{ borderColor: s.color, color: s.color, backgroundColor: `${s.color}15` }}
              >
                {s.icon}
              </div>
              <div className="font-bold text-base mb-1" style={{ color: s.color }}>{s.symbol}</div>
              <div className="text-xs text-gray-500">{t.dashboard.fiveAssetsDesc}</div>
              <div className="mt-2 text-2xl font-black" style={{ color: s.color }}>
                {s.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution Chart */}
      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="mb-4">
          <div className="text-sm font-semibold text-gray-300 mb-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            {t.dashboard.distribution}
          </div>
          <p className="text-gray-500 text-xs">{t.dashboard.distributionDesc}</p>
        </div>

        {/* Visual Bar */}
        <div className="h-4 rounded-full overflow-hidden flex mb-6">
          {REVENUE_PARTIES.map((p, i) => (
            <div
              key={p.key}
              style={{ width: `${p.pct}%`, backgroundColor: p.color }}
              title={`${p.label}: ${p.pct}%`}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {REVENUE_PARTIES.map(p => (
            <div key={p.key} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
              <div className="text-xs">
                <span className="text-gray-300">{p.label}</span>
                <span className="text-gray-500 ml-1 font-mono">{p.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution Table */}
      <div className="glass-card rounded-2xl overflow-hidden mb-6">
        <div className="p-6 border-b border-white/5">
          <h3 className="font-bold text-base mb-1">{t.dashboard.distributionTable.title}</h3>
          <p className="text-xs text-gray-500">{t.dashboard.distributionTable.subtitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left px-6 py-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.dashboard.distributionTable.party}</th>
                <th className="text-center px-4 py-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.dashboard.distributionTable.pct}</th>
                <th className="text-left px-6 py-3 text-xs text-gray-500 font-semibold uppercase tracking-wide hidden sm:table-cell">{t.dashboard.distributionTable.role}</th>
              </tr>
            </thead>
            <tbody>
              {REVENUE_PARTIES.map((p, i) => {
                const partyKey = p.key as keyof typeof t.dashboard.distributionTable.parties
                const roleKey = p.key as keyof typeof t.dashboard.distributionTable.roles
                return (
                  <tr key={p.key} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/2' : ''}`}>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                        <span className="font-medium text-xs sm:text-sm">{t.dashboard.distributionTable.parties[partyKey]}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: `${p.color}20`, color: p.color }}>
                        {p.pct}%
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-xs text-gray-500 hidden sm:table-cell">
                      {t.dashboard.distributionTable.roles[roleKey]}
                    </td>
                  </tr>
                )
              })}
              <tr className="border-t-2 border-purple-500/30 bg-purple-500/5">
                <td className="px-6 py-3.5 font-bold text-sm">Total</td>
                <td className="px-4 py-3.5 text-center">
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400">100%</span>
                </td>
                <td className="px-6 py-3.5 hidden sm:table-cell" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: t.dashboard.stats.totalRevenue, value: '$2,847,293', change: '+18.4%', up: true, color: 'text-green-400' },
          { label: t.dashboard.stats.activeTraders, value: '50,241', change: '+3.2K', up: true, color: 'text-blue-400' },
          { label: t.dashboard.stats.avgDailyVolume, value: '$4.2M', change: '+22.1%', up: true, color: 'text-purple-400' },
          { label: t.dashboard.stats.protocolEfficiency, value: '98.7%', change: '+0.3%', up: true, color: 'text-yellow-400' },
        ].map(s => (
          <div key={s.label} className="glass-card rounded-xl p-4">
            <div className="text-xs text-gray-500 mb-2">{s.label}</div>
            <div className={`text-2xl font-black font-mono mb-1 ${s.color}`}>{s.value}</div>
            <div className={`text-xs font-medium flex items-center gap-1 ${s.up ? 'text-green-400' : 'text-red-400'}`}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.up ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
              </svg>
              {s.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
