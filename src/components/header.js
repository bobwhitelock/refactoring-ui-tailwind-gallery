import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PageLink = ({ route, pageTitle, currentPageTitle }) => {
  let classes = "text-xl p-6 m-4"
  console.log("pageTitle [ddnkclbi]:", pageTitle) // eslint-disable-line no-console
  if (pageTitle == currentPageTitle) {
    classes += " border-b-4 border-black"
  }

  return (
    <h2>
      <Link to={route} className={classes}>
        {pageTitle}
      </Link>
    </h2>
  )
}

const Header = ({ siteTitle, pageTitle }) => (
  <header>
    <div>
      <h1 className="text-center p-8 text-3xl">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>

    <div className="pb-8">
      <PageLink
        route="/buttons"
        pageTitle="Buttons"
        currentPageTitle={pageTitle}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Header
