/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/onelap-redesign/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/onelap-redesign" : "",
};

export default nextConfig;
