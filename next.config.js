module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => {
    return process.env.GIT_COMMIT || 'development'
  },
  output: 'standalone',
  experimental: {}
}
