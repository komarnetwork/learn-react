import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandGithub,
} from '@tabler/icons-react'

function App() {
  return (
    <>
      <div className='bg-slate-900 grid place-content-center min-h-screen'>
        <div className='flex gap-x-2'>
          <Button onClick={() => console.log('register')} type='submit'>
            <IconBrandFacebook />
            Register
          </Button>
          <Button
            className='bg-pink-600'
            onClick={() => console.log('login')}
            type='reset'
          >
            <IconBrandTwitter />
            Login
          </Button>
          <Button className='bg-zinc-600' onClick={() => console.log('github')}>
            <IconBrandGithub />
            Github
          </Button>

          {/* <header /> */}
        </div>
      </div>
    </>
  )
}

function Button(props) {
  const { className = 'bg-blue-600', children, text, type = 'submit' } = props
  return (
    <button
      {...props}
      type={type}
      className={`${className} [&>svg]:w-5 [&s>svg]:h-5 [&>svg]:stroke-1  flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded`}
    >
      {text || children}
    </button>
  )
}

export default App
