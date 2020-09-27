require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Fate SRD`,
    description: `A friendly, searchable, & bookmarkable home for the Fate Roleplaying Game.`,
    author: `@amazingrando`,
    sharingImage: `/sharing.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fate-srd`,
        short_name: `fate-srd`,
        start_url: `/`,
        background_color: `#15598F`,
        theme_color: `#15598F`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/sharing/favicon.png',

        // WebApp Manifest Configuration
        background: '#15598F',
        theme_color: '#15598F',
        orientation: 'any',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: ` http://fate-srd-backend.lndo.site/`,
        apiBase: `api`, // optional, defaults to `jsonapi`
        // basicAuth: {
        //   username: process.env.BASIC_AUTH_USERNAME,
        //   password: process.env.BASIC_AUTH_PASSWORD,
        // },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `covers`,
        path: `${__dirname}/src/images/covers/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `buySources`,
        path: `${__dirname}/src/images/buySources/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lpHeroes`,
        path: `${__dirname}/src/images/landing-page-heroes/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
