// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lifenomade.suriblogcms.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    experimental: {
      largePageDataBytes: 256 * 1024
    }
  }