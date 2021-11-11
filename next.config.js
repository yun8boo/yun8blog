const path = require('path')

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}