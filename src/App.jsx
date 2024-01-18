import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-600 grid place-content-center min-h-screen'>
        <h1 className='text-xl'>Lern ReactJS</h1>
      </div>
    </>
  )
}

export default App
