//ES7+ expansion//
import React from 'react'

const DessertCard = (props) => {
  return (
    <div className="dessert-card">
        <img src={props.image} />
        <h4>{props.category.name}</h4>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        
    </div>
  )
}

export default DessertCard