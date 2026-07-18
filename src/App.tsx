import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SwapPanel from './components/SwapPanel'
import RevenueDashboard from './components/RevenueDashboard'
import RegionsCoverage from './components/RegionsCoverage'
import Footer from './components/Footer'
import ComplianceBadge from './components/ComplianceBadge'

type Page = 'swap' | 'dashboard'

export default function App() {
  const [page, setPage] = useState<Page>('swap')

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full bg-green-500/8 blur-3xl pointer-events-none" />

      <Header page={page} setPage={setPage} />

      <main>
        {page === 'swap' ? (
          <>
            <Hero />
            <SwapPanel />
          </>
        ) : (
          <RevenueDashboard />
        )}
        <RegionsCoverage />
        <ComplianceBadge />
      </main>

      <Footer />
    </div>
  )
}
