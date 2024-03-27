import { useState } from 'react'

function FavoriteColor() {
  const [color, setColor] = useState('red')

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red',
  })

  const updateColor = () => {
    setCar((previosState) => {
      return { ...previosState, color: 'blue' }
    })
  }

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

      <button type='button' onClick={updateColor}>
        Ubah Warna
      </button>
    </>
  )
}

export default FavoriteColor
