import React, { useEffect, useState } from 'react'
import DessertCard from './components/DessertCard'
import "./index.css"


const App = () => {
  const [desserts, setDesserts] = useState([])

    useEffect(()=>{
      fetch("/api/desserts/")
      .then(res => res.json())
      .then(data => setDesserts(data))
      },[])
    
  return (
    <div className='dessert-wrapper'>
      { desserts.map(dessert => <DessertCard {...dessert}/> ) }
    </div>
  )
}

export default App