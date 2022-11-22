/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
  },
  reactStrictMode: true,
}

module.exports = nextConfig
