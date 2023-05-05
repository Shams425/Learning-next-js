/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/blog",
        destination: "/dashboard",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
