const withSass = require('@zeit/next-sass')

// thanks next.js, I dont need to deal with webpack configuration
// or i need to configure it from scratch like the way i did back then
// https://github.com/calvinchankf/SPA2017
module.exports = withSass()