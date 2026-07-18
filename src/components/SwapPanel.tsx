import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useWallet } from '../contexts/WalletContext'
import { MOCK_TOP_TOKENS, REWARD_TOKENS, NATIVE_SOL, type Token } from '../data/tokens'

function TokenIcon({ token, size = 32 }: { token: Token; size?: number }) {
  const colors: Record<string, string> = {
    SOL: '#00FFA3',
    USDT: '#26A17B',
    USDC: '#2775CA',
    eCNH: '#E63946',
    EACO: '#9945FF',
    BONK: '#FF6B00',
    JTO: '#9D7AFF',
    WIF: '#FF69B4',
    PYTH: '#40B5E2',
    RAY: '#5FC9F3',
    ORCA: '#00D1FF',
  }
  const color = colors[token.symbol] || '#9945FF'
  return (
    <div
      className="rounded-full flex items-center justify-center font-black text-white shrink-0"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${color}, ${color}88)` }}
    >
      <span style={{ fontSize: size * 0.35 }}>{token.symbol[0]}</span>
    </div>
  )
}

export default function SwapPanel() {
  const { t } = useLanguage()
  const { connected, connect } = useWallet()

  const [fromToken, setFromToken] = useState<Token>(NATIVE_SOL)
  const [toToken, setToToken] = useState<Token>(REWARD_TOKENS[3]) // EACO
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [tokenSelector, setTokenSelector] = useState<'from' | 'to' | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [swapping, setSwapping] = useState(false)
  const [swapSuccess, setSwapSuccess] = useState(false)
  const [slippage, setSlippage] = useState('0.5')
  const [showSettings, setShowSettings] = useState(false)

  const panelRef = useRef<HTMLDivElement>(null)

  // Mock price calculation
  const mockPrice = 0.000234
  const priceImpact = '0.12'

  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount))) {
      const out = parseFloat(fromAmount) / mockPrice
      setToAmount(out.toFixed(6))
    } else {
      setToAmount('')
    }
  }, [fromAmount])

  const filteredTokens = MOCK_TOP_TOKENS.filter(token =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSwapTokens = () => {
    const tmp = fromToken
    setFromToken(toToken)
    setToToken(tmp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleSwap = async () => {
    if (!connected) { connect(); return }
    if (!fromAmount || parseFloat(fromAmount) <= 0) return
    setSwapping(true)
    await new Promise(r => setTimeout(r, 2500))
    setSwapping(false)
    setSwapSuccess(true)
    setTimeout(() => setSwapSuccess(false), 3000)
    setFromAmount('')
    setToAmount('')
  }

  const slippageOptions = ['0.1', '0.5', '1.0']

  return (
    <section id="swap" className="max-w-lg mx-auto px-4 pb-16">
      <div ref={panelRef}>
        {/* Settings */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-400">{t.swap.title}</h2>
          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </button>
            {showSettings && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-xl bg-[#1a1a28] border border-white/10 shadow-2xl p-4 z-50">
                <div className="text-xs font-semibold text-gray-400 mb-3">{t.swap.slippage}</div>
                <div className="flex gap-2 mb-4">
                  {slippageOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setSlippage(opt)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        slippage === opt
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {opt}%
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={slippage}
                    onChange={e => setSlippage(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none"
                    placeholder="0.5"
                  />
                  <span className="flex items-center px-3 text-sm text-gray-400">%</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Swap Card */}
        <div className="glass-card rounded-2xl p-4 glow-purple">
          {/* From */}
          <div className="mb-1">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-500">{t.swap.from}</span>
              {connected && <span className="text-xs text-gray-500">{t.swap.balance}: 1,234.56</span>}
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                value={fromAmount}
                onChange={e => setFromAmount(e.target.value)}
                placeholder={t.swap.enterAmount}
                className="flex-1 bg-transparent text-2xl font-semibold text-white placeholder-gray-600 outline-none font-mono"
              />
              <button
                onClick={() => setTokenSelector('from')}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <TokenIcon token={fromToken} size={24} />
                <span className="font-semibold text-sm">{fromToken.symbol}</span>
                <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Swap Arrow */}
          <div className="flex justify-center py-2 relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/10" />
            <button
              onClick={handleSwapTokens}
              className="relative z-10 w-8 h-8 rounded-full bg-[#2a2a3e] border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* To */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-500">{t.swap.to}</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={toAmount}
                readOnly
                placeholder="0.0"
                className="flex-1 bg-transparent text-2xl font-semibold text-gray-300 outline-none font-mono"
              />
              <button
                onClick={() => setTokenSelector('to')}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <TokenIcon token={toToken} size={24} />
                <span className="font-semibold text-sm">{toToken.symbol}</span>
                <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Swap Details */}
          {fromAmount && toAmount && (
            <div className="border-t border-white/5 pt-3 space-y-1.5 text-xs text-gray-500 mb-4">
              <div className="flex justify-between">
                <span>{t.swap.price}</span>
                <span className="text-gray-400 font-mono">1 {fromToken.symbol} ≈ {mockPrice.toFixed(6)} {toToken.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.swap.priceImpact}</span>
                <span className="text-green-400 font-mono">{'<'}{priceImpact}%</span>
              </div>
              <div className="flex justify-between">
                <span>{t.swap.liquidityProviderFee}</span>
                <span className="text-gray-400 font-mono">0.25%</span>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSwap}
            disabled={swapping || !fromAmount || parseFloat(fromAmount) <= 0}
            className={`w-full py-3.5 rounded-xl font-bold text-base transition-all ${
              swapSuccess
                ? 'bg-green-500 text-white'
                : !connected
                ? 'btn-primary'
                : !fromAmount || parseFloat(fromAmount) <= 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            {swapping ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {t.swap.swapping}
              </span>
            ) : swapSuccess ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.swap.swapSuccess}
              </span>
            ) : !connected ? (
              t.swap.connectWallet
            ) : !fromAmount || parseFloat(fromAmount) <= 0 ? (
              t.swap.enterAmount
            ) : (
              t.swap.swapButton
            )}
          </button>

          {/* Reward Assets */}
          <div className="mt-4 pt-3 border-t border-white/5">
            <div className="text-xs text-gray-500 mb-2">Earn Rewards</div>
            <div className="flex gap-2 flex-wrap">
              {REWARD_TOKENS.map(tok => (
                <div key={tok.symbol} className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                  <TokenIcon token={tok} size={16} />
                  <span className="text-xs font-medium text-gray-400">{tok.symbol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token Selector Modal */}
        {tokenSelector && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setTokenSelector(null); setSearchQuery('') }}
          >
            <div
              className="w-full max-w-md rounded-2xl bg-[#1a1a28] border border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-white/5">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-base">{t.swap.selectToken}</span>
                  <button onClick={() => { setTokenSelector(null); setSearchQuery('') }} className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t.swap.searchTokens}
                  autoFocus
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500 input-glow"
                />
              </div>
              <div className="max-h-80 overflow-y-auto">
                {filteredTokens.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 text-sm">{t.swap.noTokens}</div>
                ) : (
                  filteredTokens.map(token => (
                    <button
                      key={token.mint}
                      onClick={() => {
                        if (tokenSelector === 'from') setFromToken(token)
                        else setToToken(token)
                        setTokenSelector(null)
                        setSearchQuery('')
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                        (tokenSelector === 'from' ? fromToken.mint : toToken.mint) === token.mint
                          ? 'bg-purple-600/10'
                          : ''
                      }`}
                    >
                      <TokenIcon token={token} size={36} />
                      <div className="text-left flex-1">
                        <div className="font-semibold text-sm">{token.symbol}</div>
                        <div className="text-xs text-gray-500">{token.name}</div>
                      </div>
                      <div className="text-right text-xs text-gray-500 font-mono">
                        {(Math.random() * 1000).toFixed(2)}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
