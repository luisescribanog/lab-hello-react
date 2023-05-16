import React from 'react'
import Button from './Button'
import './Page.css'

function Page () {

  return (
    <div className='back container'>
      <h1 className='text'>Say Hello to ReactJS</h1>
      <p className='text'>You will learn how to use <br />
      the most popular frontend library
      </p>
      <Button mode="primary" text="Awasome" />
    </div>
  )
}
export default Page