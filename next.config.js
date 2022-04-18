module.exports = {
  trailingSlash: true,
  basePath: '/tools',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
};