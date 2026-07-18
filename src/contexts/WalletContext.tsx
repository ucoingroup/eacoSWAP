import React, { createContext, useContext, useState, useCallback } from 'react'

interface WalletState {
  connected: boolean
  address: string | null
  shortAddress: string | null
  balance: number
  walletName: string | null
  connecting: boolean
}

interface WalletContextType extends WalletState {
  connect: (walletName?: string) => Promise<void>
  disconnect: () => void
  setBalance: (b: number) => void
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  address: null,
  shortAddress: null,
  balance: 0,
  walletName: null,
  connecting: false,
  connect: async () => {},
  disconnect: () => {},
  setBalance: () => {},
})

function shortAddr(addr: string): string {
  if (addr.length < 8) return addr
  return `${addr.slice(0, 4)}...${addr.slice(-4)}`
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<WalletState>({
    connected: false,
    address: null,
    shortAddress: null,
    balance: 0,
    walletName: null,
    connecting: false,
  })

  const connect = useCallback(async (walletName = 'Phantom') => {
    setState(s => ({ ...s, connecting: true }))
    try {
      // Check if Phantom is available
      const phantom = (window as any).phantom
      if (walletName === 'Phantom' && phantom?.solana?.isPhantom) {
        const resp = await phantom.solana.connect()
        const addr = resp.publicKey.toString()
        setState({
          connected: true,
          address: addr,
          shortAddress: shortAddr(addr),
          balance: Math.random() * 100 + 0.5, // Mock balance
          walletName: 'Phantom',
          connecting: false,
        })
        return
      }
      // Mock wallet for demo
      await new Promise(r => setTimeout(r, 1500))
      const mockAddr = 'Dqfoy' + Math.random().toString(36).slice(2, 10).toUpperCase() + 'HnDHRH'
      setState({
        connected: true,
        address: mockAddr,
        shortAddress: shortAddr(mockAddr),
        balance: 1234.56,
        walletName,
        connecting: false,
      })
    } catch (e) {
      console.error('Wallet connect error:', e)
      setState(s => ({ ...s, connecting: false }))
    }
  }, [])

  const disconnect = useCallback(() => {
    setState({
      connected: false,
      address: null,
      shortAddress: null,
      balance: 0,
      walletName: null,
      connecting: false,
    })
  }, [])

  const setBalance = useCallback((b: number) => {
    setState(s => ({ ...s, balance: b }))
  }, [])

  return (
    <WalletContext.Provider value={{ ...state, connect, disconnect, setBalance }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useContext(WalletContext)
}
