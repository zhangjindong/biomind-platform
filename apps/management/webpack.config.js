const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
  '@biomind-platform/user/domain',
  '@biomind-platform/dept/domain',
  '@biomind-platform/user/feature-home-list',
  '@biomind-platform/dept/feature-home-list',
]);

module.exports = {
  output: {
    uniqueName: 'management',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: 'management',
      filename: 'remoteEntry.js',
      exposes: {
        './UserFeatureHomeListModule':
          '@biomind-platform/user/feature-home-list',
        './DeptFeatureHomeListModule':
          '@biomind-platform/dept/feature-home-list',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mobile": "mobile@http://localhost:4200/remoteEntry.js",

      // },

      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.0.0',
        },
        '@ngrx/store': {
          singleton: true,
          strictVersion: true,
        },
        '@ngrx/entity': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '10.1.2',
        },
        '@ngrx/store-devtools': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '10.1.2',
        },
        '@ngrx/effects': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '10.1.2',
        },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
