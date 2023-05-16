import React from 'react'
import './stylesCard.css'

function Card({children}) {
  return (
    <div>
      <div className="card" >
        <div className="card-body">
          {children }
        </div>
      </div>

    </div>

  )
}

export default Card 