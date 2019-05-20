const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const nextConfig = {
  target: 'serverless'
};

module.exports = withPlugins([
  [
    withCSS, {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      }
    }
  ],
  [
    withImages, {
      webpack(config, options) {
        return config
      }
    }
  ]
], nextConfig);