/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  turbopack: {},
  env: {
    LANG: 'es_AR.UTF-8',
    LC_ALL: 'es_AR.UTF-8',
  },
};

module.exports = nextConfig;
