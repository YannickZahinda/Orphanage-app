import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={className}>{btnText}</button>
  )
}

export default Button