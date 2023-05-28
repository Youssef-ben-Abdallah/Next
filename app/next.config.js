/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["fakestoreapi.com","api.lorem.space","firebasestorage.googleapis.com", "apigenerator.dronahq.com"],
    }
}

module.exports = nextConfig
