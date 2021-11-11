const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

  module.exports = withPWA({
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})