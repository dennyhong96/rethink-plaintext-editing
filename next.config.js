// @zeit/next-css package has been deprecated
// https://www.npmjs.com/package/@zeit/next-css

module.exports = {
  webpack: config => {
    // Load SVGs inline
    config.module.rules.push({
      test: /\.svg$/,
      use: { loader: 'svg-inline-loader', options: {} }
    });
    return config;
  }
};
