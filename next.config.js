/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    // !!!TEMP!!!
    // https://app.shortcut.com/bark/story/633009/typescript-temporarily-disable-failing-the-prod-build-when-there-are-errors
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: '/checkout',
        destination: '/checkout/information',
        permanent: true
      }
    ];
  },
  reactStrictMode: true,
  i18n: {
    // https://nextjs.org/docs/advanced-features/i18n-routing
    // These are all the locales you want to support in
    // your application
    locales: ['en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      // {
      //   domain: 'example.com',
      //   defaultLocale: 'en-US',
      // },
      // {
      //   domain: 'example.fr',
      //   defaultLocale: 'fr',
      //   // an optional http field can also be used to test
      //   // locale domains locally with http instead of https
      //   http: true,
      // },
    ]
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.cloudfront.net'
        },
        {
          protocol: 'https',
          hostname: '**.rackcdn.com'
        },
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com'
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net'
        }
      ]
    }
  }
};

module.exports = nextConfig;
