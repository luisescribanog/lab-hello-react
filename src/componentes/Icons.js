import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'
import './styleIcons.css'

function Icons({ className,  text }) {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <div>
          <img src={ logo }alt="imagen" className='prueba' />
        </div>
        <div>
          <img src={ menu } alt="pac-man" className={ className }/>
        </div> 
        
      </div>
      
   
    </>
   
 

 
  )
}

export default Icons