import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useWallet } from '../contexts/WalletContext'

interface HeaderProps {
  page: 'swap' | 'dashboard'
  setPage: (p: 'swap' | 'dashboard') => void
}

export default function Header({ page, setPage }: HeaderProps) {
  const { t, lang, setLang, languages } = useLanguage()
  const { connected, connecting, shortAddress, walletName, balance, connect, disconnect } = useWallet()
  const [langOpen, setLangOpen] = useState(false)
  const [walletOpen, setWalletOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const walletRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
      if (walletRef.current && !walletRef.current.contains(e.target as Node)) setWalletOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const currentLang = languages.find(l => l.code === lang) || languages[0]

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setPage('swap')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-green-400 flex items-center justify-center font-black text-sm tracking-tight">
            E
          </div>
          <div>
            <span className="font-black text-lg tracking-tight">eaco</span>
            <span className="font-black text-lg text-green-400 tracking-tight">SWAP</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Solana
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => setPage('swap')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              page === 'swap'
                ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.nav.swap}
          </button>
          <button
            onClick={() => setPage('dashboard')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              page === 'dashboard'
                ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.nav.dashboard}
          </button>
          <a
            href="#"
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {t.nav.docs}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <span className="text-base">{currentLang.flag}</span>
              <span className="hidden sm:block text-xs">{currentLang.native}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#1a1a28] border border-white/10 shadow-2xl py-2 z-50">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false) }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${
                      lang === l.code ? 'text-purple-400' : 'text-gray-300'
                    }`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-xs">{l.native}</div>
                      <div className="text-gray-500 text-xs">{l.label}</div>
                    </div>
                    {lang === l.code && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wallet */}
          <div ref={walletRef} className="relative">
            {connected ? (
              <>
                <button
                  onClick={() => setWalletOpen(!walletOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all text-sm font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="hidden sm:block">{shortAddress}</span>
                  <svg className={`w-3 h-3 transition-transform ${walletOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {walletOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-[#1a1a28] border border-white/10 shadow-2xl py-3 z-50">
                    <div className="px-4 py-2 border-b border-white/5">
                      <div className="text-xs text-gray-500 mb-1">{t.wallet.balance}</div>
                      <div className="font-mono text-lg font-semibold text-green-400">
                        {balance.toFixed(4)} SOL
                      </div>
                    </div>
                    <div className="px-4 py-2 text-xs text-gray-400 border-b border-white/5">
                      {walletName} • {shortAddress}
                    </div>
                    <button
                      onClick={() => { disconnect(); setWalletOpen(false) }}
                      className="w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left"
                    >
                      {t.nav.disconnect}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => connect()}
                disabled={connecting}
                className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-2 disabled:opacity-60"
              >
                {connecting ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                )}
                {connecting ? t.wallet.connecting : t.nav.connect}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
