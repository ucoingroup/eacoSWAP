import React, { createContext, useContext, useState, useCallback } from 'react'
import { en, type Translations } from '../locales/en'
import { zh } from '../locales/zh'
import { es } from '../locales/es'
import { fr } from '../locales/fr'
import { ar } from '../locales/ar'
import { ru } from '../locales/ru'

const dictionaries: Record<string, Translations> = {
  en,
  zh,
  es,
  fr,
  ar,
  ru,
}

type Language = 'en' | 'zh' | 'es' | 'fr' | 'ar' | 'ru'

interface LanguageContextType {
  lang: Language
  t: Translations
  setLang: (l: Language) => void
  languages: { code: Language; label: string; native: string; flag: string }[]
}

const defaultLang = 'en'

const LanguageContext = createContext<LanguageContextType>({
  lang: defaultLang,
  t: en,
  setLang: () => {},
  languages: [],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('eaco-lang') as Language | null
    return saved && dictionaries[saved] ? saved : defaultLang
  })

  const setLang = useCallback((l: Language) => {
    setLangState(l)
    localStorage.setItem('eaco-lang', l)
  }, [])

  const languages = [
    { code: 'en' as Language, label: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'zh' as Language, label: '中文', native: '中文', flag: '🇨🇳' },
    { code: 'es' as Language, label: 'Español', native: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, label: 'Français', native: 'Français', flag: '🇫🇷' },
    { code: 'ar' as Language, label: 'العربية', native: 'العربية', flag: '🇸🇦' },
    { code: 'ru' as Language, label: 'Русский', native: 'Русский', flag: '🇷🇺' },
  ]

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang] || en, setLang, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
