import React from 'react'
import Helmet from 'react-helmet'

const MetaTags = (props) => {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}

export default MetaTags