module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|md|mdx)$/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
