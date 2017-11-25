module.exports = {
  siteMetadata: {
    title: `Playing with Gatsby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    //`gatsby-plugin-styled-components`,    
  ],
}

// Can't have both glamor and styled-components, they conflict.
//`gatsby-plugin-glamor`,