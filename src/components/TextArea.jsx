import { useState } from 'react'

function TextArea() {
  const [textarea, setTextArea] = useState('ini content')

  const handleChange = (event) => {
    setTextArea(event.target.value)
  }

  return (
    <>
      <form>
        <textarea value={textarea} cols='30' rows='5' onChange={handleChange} />
      </form>
    </>
  )
}

export default TextArea
