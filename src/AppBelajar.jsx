// import {
//   IconBrandTwitter,
//   IconBrandFacebook,
//   IconBrandGithub,
// } from '@tabler/icons-react'

// import Garage from './components/Garage'
// import ListGarage from './components/ListGarage'
// import Product from './components/Product'
// import Contact from './pages/Contact'
// import NoPage from './pages/NoPage'

// import Button from './components/Button'
// import Card from './components/Card'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import FavoriteColor from './components/FavoriteColor'
import Timers from './components/Timer'
import Counter from './components/Counter'
import MyForm from './components/Form'
import TextArea from './components/Textarea'
import DropDown from './components/DropDown'
// function MissedGoal() {
//   return <h1>MISSED !</h1>
// }
// function MadeGoal() {
//   return <h1>GOAL !</h1>
// }

// function Goal(props) {
//   const isGoal = props.isGoal

//   // if (isGoal) {
//   //   return <MadeGoal />
//   // }

//   // return <MissedGoal />

//   // Ternary Operation
//   return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>
// }

// const cars = ['Ford', 'BMW', 'Audi']

function App() {
  // const phoneData = [
  //   { name: 'Iphone X', price: 10000000, discount: 50 },
  //   { name: 'Oppo Find X', price: 14000000, discount: 50 },
  //   { name: 'Redmi Note X', price: 12000000, discount: 50 },
  //   { name: 'Vivo y19', price: 55000000, discount: 50 },
  // ]

  return (
    <>
      <div className='bg-slate-100 text-slate-800 tracking-tighter antialiased flex items-center justify-center min-h-screen text-center'>
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

          {/* <Card>
            <Card.Title>Hallo React</Card.Title>
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              consequuntur?
            </Card.Body>
            <Card.Footer>
              <Button>Register</Button>
            </Card.Footer>
          </Card> */}

          {/* Display Data & Looping JSX  */}
          {/* {phoneData.map((phone, id) => (
            <Product
              key={id}
              name={phone.name}
              price={phone.price}
              discount={phone.discount}
            ></Product>
          ))} */}

          {/* If Statment */}
          {/* <Goal isGoal={false} /> */}

          {/* Logical && Operator */}
          {/* <Garage cars={cars} /> */}

          {/* <ListGarage /> */}

          {/* React Router */}
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index path='/' element={<Home />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>

          <FavoriteColor />
          <Timers />
          <Counter />
          <MyForm />
          <TextArea />
          <DropDown />
        </div>
      </div>
    </>
  )
}

export default App
