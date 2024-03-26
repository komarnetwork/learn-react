function Product({ name, price, discount = 0 }) {
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
        <hr className='mb-2' />
      </div>
    </>
  )
}

export default Product
