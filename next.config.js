/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    appDir: true,
    swcPlugins: [
      [
        '@swc/plugin-styled-components',
        {
          displayName: process.env.NODE_ENV === 'development',
          ssr: true,
        },
      ],
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
