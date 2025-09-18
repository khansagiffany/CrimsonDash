/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features for Next.js 15
    experimental: {
      // Enable React 18 features
      appDir: true,
    },
    
    // Optimize images
    images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 768, 1024, 1280, 1600],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  
    // Compress output
    compress: true,
  
    // Enable SWC minification
    swcMinify: true,
  
    // Output configuration
    output: 'standalone',
  
    // Headers for security and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
          ],
        },
      ];
    },
  
    // Redirects
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
      ];
    },
  
    // Environment variables
    env: {
      CUSTOM_KEY: 'futuristic-dashboard',
    },
  
    // Webpack configuration for optimization
    webpack: (config, { dev, isServer }) => {
      // Optimize bundle in production
      if (!dev && !isServer) {
        config.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        };
      }
  
      return config;
    },
  
    // TypeScript configuration
    typescript: {
      // Ignore TypeScript errors during build (not recommended for production)
      ignoreBuildErrors: false,
    },
  
    // ESLint configuration
    eslint: {
      // Run ESLint during build
      ignoreDuringBuilds: false,
    },
  
    // Performance budgets
    experimental: {
      // Optimize CSS
      optimizeCss: true,
      // Modern builds
      modern: true,
    },
  };
  
  module.exports = nextConfig;