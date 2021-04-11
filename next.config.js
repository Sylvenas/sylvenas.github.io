const withLess = require('@zeit/next-less');
module.exports = withLess({
  webpack(config, options) {
    return config;
  },
});
