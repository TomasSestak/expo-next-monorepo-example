const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')([
	'app',
	'@gorhom/bottom-sheet',
	'@gorhom/portal',
	'dripsy',
	'@dripsy/core',
	'@dripsy/gradient',
]);

const nextConfig = {};

module.exports = withFonts(withPlugins([withTM, withBundleAnalyzer, [withExpo, { projectRoot: __dirname + '/../..' }]], nextConfig));
