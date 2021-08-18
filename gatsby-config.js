module.exports = {
  siteMetadata: {
    title: `TKLGroup`,
    keywords: [
      "Precast concrete",
      "Precast concrete design",
      "Precast concrete building",
      "Precast building",
      "Architectural precast concrete",
      "Sustainable construction",
      "Sustainable construction projects",
      "Sustainable construction materials",
      "Sustainability in building design and construction",
      "Modern precast concrete",
      "Buy precast building construction services",
      "Precast building manufacturer",
      "Precast concrete constructio",
    ],
    description:
      "TKL Group is a leader in the eco-friendly design, consulting, and manufacturing of structural and architectural precast concrete. TKL Group is a leader in the eco-friendly design, consulting, and manufacturing of structural and architectural precast concrete. ",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "tkl-group",
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165935373-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oswald`,
          `open sans\:300,400,500,600,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },

    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Oswald`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`200`, `300`, `400`, `500`, `600`, `700`],
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
