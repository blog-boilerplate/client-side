import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
  // ... outras configurações do webpack ...
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'https://suriblogcms.online/sw.js', to: 'static/sw.js' },
      ],
    }),
  ],
};