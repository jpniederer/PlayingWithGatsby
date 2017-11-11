import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>This is Gatsby</h1>
    <p>I will play with Gatsby in this environment.</p>
    <p>At some point I will build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/myfirstpage/">Go to my first page</Link></p>
  </div>
)

export default IndexPage
