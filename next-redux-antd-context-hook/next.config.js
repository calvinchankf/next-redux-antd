const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

// load antd css: https://github.com/zeit/next.js/issues/5180
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => { }
}

// thanks next.js, I dont need to deal with webpack configuration
// or i need to configure it from scratch like the way i did back then
// https://github.com/calvinchankf/SPA2017
module.exports = withSass(withCSS())