import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>This is Gatsby</h1>
    <p>I will play with Gatsby in this environment.</p>
    <p>At some point I will build something great. Hopefully on <a href="https://dev-eryday.com">Dev-eryday</a></p>
    <blockquote>
      <p>
        Testing a <em>blockquote</em> from tutorial 2
      </p>
    </blockquote>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/myfirstpage/">Go to my first page</Link></p>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
)

export default IndexPage
