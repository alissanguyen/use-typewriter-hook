/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: { esmExternals: true },
});
