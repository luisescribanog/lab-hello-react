import React from 'react'

function Button({mode , text}) {
  return (
    <>
      <button className={`btn btn-${mode} m-5`}>{text}</button>
    </>
  )
}

export default Button