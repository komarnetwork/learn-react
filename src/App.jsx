import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandGithub,
} from '@tabler/icons-react'

import Button from './components/Button'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='bg-slate-100 text-slate-800 tracking-tighter antialiased flex items-center justify-center min-h-screen'>
        <div className='max-w-xl w-full'>
          {/* <Button onClick={() => console.log('register')} type='submit'>
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
          </Button> */}

          <Card>
            <Card.Title>Hallo React</Card.Title>
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              consequuntur?
            </Card.Body>
            <Card.Footer>
              <Button>Register</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
