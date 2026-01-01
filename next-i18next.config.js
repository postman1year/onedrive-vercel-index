import path from 'path'

const nextI18NextConfig = {
  i18n: {
    localeDetection: false,
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-CN', 'zh-TW']
  },
  localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}

export default nextI18NextConfig
