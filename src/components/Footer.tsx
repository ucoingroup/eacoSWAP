import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-green-400 flex items-center justify-center font-black text-xs text-white">
                E
              </div>
              <span className="font-black text-sm tracking-tight">eaco<span className="text-green-400">SWAP</span></span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{t.footer.disclaimer}</p>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.footer.product}</div>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#swap" className="hover:text-white transition-colors">{t.footer.swap}</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">{t.footer.dashboard}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.docs}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.footer.resources}</div>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.footer.community}</div>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medium</a></li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600">
            {t.footer.copyright}
          </div>
          <div className="flex gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{t.footer.risk}</a>
          </div>
        </div>

        {/* EACO Contract */}
        <div className="mt-6 p-4 rounded-xl bg-white/3 border border-white/5 text-center">
          <div className="text-xs text-gray-500 mb-1">EACO Contract (Solana)</div>
          <div className="font-mono text-sm text-purple-400 break-all">
            DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH
          </div>
          <div className="text-xs text-gray-600 mt-1">eaco2cc@gmail.com</div>
        </div>
      </div>
    </footer>
  )
}
