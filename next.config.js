// next.config.js
module.exports = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      // Alias 'underscore' package imports to 'lodash'
      'underscore': 'lodash',
      // Alias specific internal polyfill paths
      'next/dist/build/polyfills/polyfill-module': './lib/modern-polyfill.js',
    },
	resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
};
