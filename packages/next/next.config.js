const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withTM = require('next-transpile-modules')([
  'app',
  '@gorhom/bottom-sheet',
  '@gorhom/portal',
  'dripsy',
  '@dripsy/core'
]);

const nextConfig = {};

module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withBundleAnalyzer,
    [withExpo, { projectRoot: __dirname + '/../..' }]
  ],
  nextConfig
);
