import { useState } from 'react'

function FavoriteColor() {
  const [color, setColor] = useState('red')

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red',
  })

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={() => setColor('blue')}>
        Blue
      </button>
      <hr />

      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} {car.year}
      </p>
    </>
  )
}

export default FavoriteColor
