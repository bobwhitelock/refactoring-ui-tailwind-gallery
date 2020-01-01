import PropTypes from "prop-types"
import React from "react"

const ButtonInfo = ({ children, description, additionalClasses }) => {
  const classes = `bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 ${additionalClasses}`
  if (!children) {
    children = "Primary"
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg">{description}</h3>
      <button className={classes}>{children}</button>
    </div>
  )
}

ButtonInfo.propTypes = {
  description: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string.isRequired,
}

export default ButtonInfo
