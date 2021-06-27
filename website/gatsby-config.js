require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Fate SRD`,
    description: `A friendly, searchable, & bookmarkable home for the Fate Roleplaying Game.`,
    author: `@amazingrando`,
    sharingImage: `/sharing.jpg`,
    siteUrl: `https://www.fate-srd.com`,
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
        name: `Fate SRD`,
        short_name: `Fate SRD`,
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
        baseUrl: `https://backend.fate-srd.com/`,
        apiBase: `api`, // optional, defaults to `jsonapi`
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage`,
        path: `${__dirname}/src/images/home/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'hie3exj',
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: '5fb1d027-2d7b-4a98-a446-9d7f92c7c2f1',
        srcUrl: 'https://umami-amazingrando.herokuapp.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UCQSvVIzeYCcGIbyD4pTsAEQ'],
        apiKey: process.env.YOUTUBE_API_KEY, // Optional for public requests
        maxVideos: 50, // Defaults to 50
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    },
  ],
};
