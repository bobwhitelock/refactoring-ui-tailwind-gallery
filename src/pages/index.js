import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonInfo from "../components/button_info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="m-8">
      <ButtonInfo description="Small rounded" additionalClasses="rounded" />
      <ButtonInfo description="Large rounded" additionalClasses="rounded-lg" />
      <ButtonInfo description="Full rounded" additionalClasses="rounded-full" />
      <ButtonInfo description="Square" additionalClasses="" />
      <ButtonInfo
        description="Uppercase text"
        additionalClasses="rounded uppercase"
      />
      <ButtonInfo
        description="With soft shadow"
        additionalClasses="rounded shadow-lg"
      />
      <ButtonInfo
        description="Vertical gradient"
        additionalClasses="rounded bg-gradient-t-gray-600"
      />
      <ButtonInfo
        description="Horizontal gradient"
        additionalClasses="rounded bg-gradient-r-gray-600"
      />
    </div>

    <Link to="/page-2/" className="p-8 m-8 py-8">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
