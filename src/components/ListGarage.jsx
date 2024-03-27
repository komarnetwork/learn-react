function Car(props) {
  return <li>I am a {props.brand}</li>
}

function ListGarage() {
  const cars = [
    {
      id: 1,
      brand: 'MBW',
    },
    {
      id: 2,
      brand: 'Ford',
    },
    {
      id: 3,
      brand: 'Audi',
    },
  ]

  return (
    <>
      <h1>Who lives in my Garge</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  )
}

export default ListGarage
