/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.js'

const nextConfig = {
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => {
    return process.env.GIT_COMMIT || 'development'
  },
  output: 'standalone',
  experimental: {}
}

export default nextConfig
