export interface Token {
  symbol: string
  name: string
  decimals: number
  mint: string
  logoUrl?: string
  isNative?: boolean
  isEaco?: boolean
  isReward?: boolean
  chainId: string
}

export const NATIVE_SOL: Token = {
  symbol: 'SOL',
  name: 'Solana',
  decimals: 9,
  mint: 'So11111111111111111111111111111111111111112',
  isNative: true,
  chainId: 'solana',
}

export const REWARD_TOKENS: Token[] = [
  {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    mint: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    chainId: 'solana',
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    chainId: 'solana',
  },
  {
    symbol: 'eCNH',
    name: 'eCNH Digital Yuan',
    decimals: 6,
    mint: '7GQnqthWKa5v2GqXYWhmgWZY5mCRrniwK3Xuinm9GKw5',
    isReward: true,
    chainId: 'solana',
  },
  {
    symbol: 'EACO',
    name: 'EACO Token',
    decimals: 6,
    mint: 'DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH',
    isEaco: true,
    chainId: 'solana',
  },
]

export const MOCK_TOP_TOKENS: Token[] = [
  ...REWARD_TOKENS,
  NATIVE_SOL,
  {
    symbol: 'BONK',
    name: 'Bonk',
    decimals: 5,
    mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    chainId: 'solana',
  },
  {
    symbol: 'JTO',
    name: 'Jito',
    decimals: 9,
    mint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    chainId: 'solana',
  },
  {
    symbol: 'WIF',
    name: 'dogwifhat',
    decimals: 6,
    mint: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
    chainId: 'solana',
  },
  {
    symbol: 'PYTH',
    name: 'Pyth Network',
    decimals: 6,
    mint: 'HZ1JovNiV2GrkfMVq7rLrTh8X9M4xjBD1KeoBH6Y7iCQ',
    chainId: 'solana',
  },
  {
    symbol: 'RAY',
    name: 'Raydium',
    decimals: 6,
    mint: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    chainId: 'solana',
  },
  {
    symbol: 'ORCA',
    name: 'Orca',
    decimals: 6,
    mint: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    chainId: 'solana',
  },
  {
    symbol: 'SRM',
    name: 'Serum',
    decimals: 6,
    mint: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    chainId: 'solana',
  },
  {
    symbol: 'mSOL',
    name: 'Marinade Staked SOL',
    decimals: 9,
    mint: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    chainId: 'solana',
  },
  {
    symbol: 'STSOL',
    name: 'Lido Staked SOL',
    decimals: 9,
    mint: '7dHbWX3ci3krhkVJzRLrz3UdywWTLq2kBiJqoCfN44J',
    chainId: 'solana',
  },
  {
    symbol: 'RENDER',
    name: 'Render Token',
    decimals: 8,
    mint: 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof',
    chainId: 'solana',
  },
  {
    symbol: 'W',
    name: 'Wormhole',
    decimals: 6,
    mint: '85VBFQZC9TZzfux4NHpzS8RwqrAadyKTR1xCEx1tbJ3y',
    chainId: 'solana',
  },
  {
    symbol: 'JUP',
    name: 'Jupiter',
    decimals: 6,
    mint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    chainId: 'solana',
  },
]

export const REVENUE_STAKES = [
  { symbol: 'SOL', color: '#00FFA3', icon: '◎', pct: 20 },
  { symbol: 'USDT', color: '#26A17B', icon: '₮', pct: 20 },
  { symbol: 'USDC', color: '#2775CA', icon: '$', pct: 20 },
  { symbol: 'eCNH', color: '#E63946', icon: '¥', pct: 20 },
  { symbol: 'EACO', color: '#9945FF', icon: '◆', pct: 20 },
]

export const REVENUE_DISTRIBUTION = {
  investors: 30,
  developers: 15,
  traders: 10,
  operations: 12,
  compliance: 3,
  partners: 5,
  community: 8,
  reserve: 7,
  treasury: 7,
  teamOptions: 3,
}

export const REVENUE_PARTIES = [
  { key: 'investors', label: 'Investors', pct: 30, color: '#9945FF' },
  { key: 'developers', label: 'Developers', pct: 15, color: '#00FFA3' },
  { key: 'traders', label: 'Trading Team', pct: 10, color: '#F59E0B' },
  { key: 'operations', label: 'Operations', pct: 12, color: '#EC4899' },
  { key: 'compliance', label: 'Compliance', pct: 3, color: '#6366F1' },
  { key: 'partners', label: 'Partners', pct: 5, color: '#14B8A6' },
  { key: 'community', label: 'Community', pct: 8, color: '#F97316' },
  { key: 'reserve', label: 'Reserve', pct: 7, color: '#8B5CF6' },
  { key: 'treasury', label: 'EACO Treasury', pct: 7, color: '#DC1FFF' },
  { key: 'teamOptions', label: 'Team Options', pct: 3, color: '#EF4444' },
]

export const COMPLIANT_COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
]

export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', native: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', native: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', native: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', native: 'العربية', flag: '🇸🇦' },
  { code: 'ru', label: 'Русский', native: 'Русский', flag: '🇷🇺' },
]
