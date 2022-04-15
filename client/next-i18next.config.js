const path = require('path')

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'hi-IN', 'gu-IN'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'hi.example.com',
    //     defaultLocale: 'hi-IN',
    //   },
    //   {
    //     domain: 'gu.example.com',
    //     defaultLocale: 'gu-IN',
    //   }
    // ],
  },
  localePath: path.resolve('./src/utils/locales'),
}
