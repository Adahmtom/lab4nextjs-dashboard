
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;