/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록 함
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
