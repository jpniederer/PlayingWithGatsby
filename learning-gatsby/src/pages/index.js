import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'

import { rhythm } from '../utils/typography'

const IndexPage = ({ data }) => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>This is Gatsby</h1>
    <p>I will play with Gatsby in this environment.</p>
    <p>At some point I will build something great. Hopefully on <a href="https://dev-eryday.com">Dev-eryday</a></p>
    <blockquote>
      <p>
        Testing a <em>blockquote</em> from tutorial 2
      </p>
    </blockquote>
    <h4>
      {data.allMarkdownRemark.totalCount} Posts
    </h4>
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
          </g.H3>
          <p>
            {node.excerpt}
          </p>
        </Link>
      </div>
    )}
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/myfirstpage/">Go to my first page</Link></p>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date],order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
