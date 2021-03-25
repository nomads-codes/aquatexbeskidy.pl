// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
          {
            test: [/node_modules\/leaflet/, /node_modules\\leaflet/],
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, '../src/components'),
        '~containers': path.resolve(__dirname, '../src/containers'),
        '~types': path.resolve(__dirname, '../src/types'),
        '~theme': path.resolve(__dirname, '../src/theme'),
        '~hooks': path.resolve(__dirname, '../src/hooks'),
        '~utils': path.resolve(__dirname, '../src/utils'),
      },
    },
  });
};
