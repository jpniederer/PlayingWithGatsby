module.exports = {
  siteMetadata: {
    title: `Playing with Gatsby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-glamor`,
    //`gatsby-plugin-styled-components`,    
  ],
}

// Can't have both glamor and styled-components, they conflict.
//`gatsby-plugin-glamor`,