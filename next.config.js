/** @type {import('next').NextConfig} */
import i18nConfig from './next-i18next.config.js'

const nextConfig = {
  i18n: i18nConfig.i18n,
  trailingSlash: true,
  generateBuildId: () => {
    return process.env.GIT_COMMIT || 'development'
  },
  output: 'standalone',
  experimental: {}
}

export default nextConfig
