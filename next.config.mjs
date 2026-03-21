/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:section(home|services|portfolio|about|contact)',
                destination: '/',
            },
        ];
    },
};

export default nextConfig;
