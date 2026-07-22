/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config) => {
    return config;
  },
  env: {
    LANG: 'es_AR.UTF-8',
    LC_ALL: 'es_AR.UTF-8',
  },
};

module.exports = nextConfig;
