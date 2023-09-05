/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Thêm 'cdn.sanity.io' vào danh sách các domains
    },
}

module.exports = nextConfig
