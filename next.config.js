const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')

const nextConfig = {
  target: 'server'
};

module.exports = withPlugins([
  // add plugins here..
  [
    withCSS, {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      }
    }
  ],
], nextConfig);