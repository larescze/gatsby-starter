import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Error404 = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <h1>404: Page Not Found</h1>
    <p>Sorry, the page you requested could not be found. Please go back to the homepage.</p>
  </Layout>
)

export default Error404
