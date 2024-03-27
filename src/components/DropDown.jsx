import { useState } from 'react'

function DropDown() {
  const [myName, setMyName] = useState('komar')

  const handleChange = (event) => {
    setMyName(event.target.value)
  }

  return (
    <>
      <form>
        <select value={myName} onChange={handleChange}>
          <option value='komar'>Komar</option>
          <option value='udin'>Udin</option>
        </select>
      </form>
    </>
  )
}

export default DropDown
