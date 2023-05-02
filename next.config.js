/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'niliaCarton728',
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
