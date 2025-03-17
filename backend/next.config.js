/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n  async headers() {\n    return [\n      {\n        source: '/api/:path*',\n        headers: [\n          { key: 'Access-Control-Allow-Credentials', value: 'true' },\n          { key: 'Access-Control-Allow-Origin', value: '*' },\n          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },\n          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },\n        ],\n      },\n    ];\n  },\n};\n\nmodule.exports = nextConfig;