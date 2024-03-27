import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav className='mb-5 bg-cyan-400'>
        <ul className='flex justify-center'>
          <li className='mx-3'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-3'>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='mx-3'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
