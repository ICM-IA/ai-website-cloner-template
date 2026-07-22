/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  turbopack: {
    root: __dirname,
  },
  env: {
    LANG: 'es_AR.UTF-8',
    LC_ALL: 'es_AR.UTF-8',
    BUILD_ID: '1784747900',
  },
};

module.exports = nextConfig;
