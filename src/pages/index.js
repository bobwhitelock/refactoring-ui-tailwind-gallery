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
      <ButtonInfo
        description="Raised with bottom profile"
        additionalClasses="rounded border-b-4 border-gray-800"
      />
      <ButtonInfo
        description="Raised with top profile"
        additionalClasses="rounded border-t-4 border-gray-600"
      />

      <ButtonInfo description="With icon on left" additionalClasses="rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 border-3 border-white inline mr-2 stroke-current fill-current align-middle"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke-width="2" />
          <path d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
        </svg>
        <span className="align-middle">Primary</span>
      </ButtonInfo>

      <ButtonInfo description="With icon on right" additionalClasses="rounded">
        <span className="align-middle">Primary</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 border-3 border-white inline ml-2 stroke-current fill-current align-middle"
        >
          <path d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
        </svg>
      </ButtonInfo>
    </div>

    <Link to="/page-2/" className="p-8 m-8 py-8">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
