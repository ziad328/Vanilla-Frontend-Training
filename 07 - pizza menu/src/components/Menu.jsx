import React from 'react'
import Pizza from './Pizza.jsx'
import { pizzaData } from './../data';

function Menu() {
  return (
    <main className='menu' >
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} />
      ))}
    </main>
  )
}

export default Menu