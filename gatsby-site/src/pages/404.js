/* eslint-disable no-unused-vars */
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
/* eslint-enable no-unused-vars */

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
