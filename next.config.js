/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["res.cloudinary.com", "i.imgur.com"],
    },
};

module.exports = nextConfig;
