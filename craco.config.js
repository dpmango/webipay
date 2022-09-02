const path = require('path');
const CracoLessPlugin = require('craco-less');

const alias = require('./src/config/aliases');

const SRC = './src';
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: resolvedAliases,
    configure: function (webpackConfig) {
      const svgLoader = {
        test: /\.svg$/i,
        oneOf: [
          {
            resourceQuery: /raw/,
            type: 'asset/source',
          },
          {
            type: 'asset/resource',
          },
        ],
      };

      webpackConfig.module.rules.push(svgLoader);

      return webpackConfig;
    },
  },
};
