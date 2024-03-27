function Product({ name, price, discount = 0 }) {
  const shoot = (a, b) => {
    alert(b.type)
  }
  return (
    <>
      <div className='text-center'>
        <h2>{name}</h2>
        <p>
          <s>Rp. {price}</s> ({discount}%)
        </p>

        <p className='mb-2'>
          <b>
            Rp. {parseInt(price) - (parseInt(price) * parseInt(discount)) / 100}
          </b>
        </p>
        <button
          className='bg-blue-600 text-white px-4 py-1 rounded'
          onClick={(event) => shoot('goal', event)}
        >
          Klik
        </button>
        <hr className='mb-2' />
      </div>
    </>
  )
}

export default Product
