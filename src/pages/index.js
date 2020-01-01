import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="m-8">
      <h2 className="text-xl">Buttons</h2>
      <div className="mt-4">
        <h3 className="text-lg">Small rounded</h3>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Primary
        </button>
      </div>
    </div>
    <Link to="/page-2/" className="p-8 m-8 py-8">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
