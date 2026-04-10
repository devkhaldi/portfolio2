/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/faq',
                destination: '/#faq',
                permanent: false,
            },
            {
                source: '/services',
                destination: '/#services',
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/:section(home|portfolio|about|contact)',
                destination: '/',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ],
    },
};

export default nextConfig;
