import React from 'react'
import Layout from '../components/layout'
import MetaTags from '../components/MetaTags'
import { graphql } from 'gatsby'

const Post = (props) => {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  return (
    <Layout>
      <MetaTags
        title={title}
      />
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
} 

export default Post

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`