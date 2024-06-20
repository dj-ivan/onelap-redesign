/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/onelap-redesign/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/onelap-redesign' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
