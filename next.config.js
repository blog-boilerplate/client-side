// next.config.js
module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    experimental: {
      largePageDataBytes: 256 * 1024
    }
  }