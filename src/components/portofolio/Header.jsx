import { Component } from 'react'
import ParticlesBg from 'particles-bg'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { TypeAnimation } from 'react-type-animation'
import { IconBrandGithub, IconLayoutDashboard } from '@tabler/icons-react'

class Header extends Component {
  render() {
    if (!this.props.data) return null

    const project = this.props.data.project
    const github = this.props.data.github
    const name = this.props.data.name
    const links = this.props.data.links

    return (
      <header id='home' className='relative'>
        <ParticlesBg type='circle' bg={true} />
        <motion.div
          className='z-[999] fixed top-0 left-1/2 h-[4rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
        ></motion.div>
        <nav
          className='z-[999] fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'
          id='nav-wrap'
        >
          <ul
            className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'
            id='nav'
          >
            {links.map((link) => (
              <motion.li
                className='h-3/4 flex items-center justify-center relative'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition text-slate-400 dark:hover:text-indigo-500'
                  href={link.hash}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-col text-gray-400 justify-center items-center h-dvh'>
            <Fade bottom>
              <h1 className='text-slate-50 text-5xl md:text-7xl text-center'>
                {name}
              </h1>
            </Fade>

            <TypeAnimation
              className='text-4xl'
              sequence={[
                'Full Stack Web Developer', // Types 'One'
                1000, // Waits 1s
                'React Developer', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
            />

            <div className='py-9'>
              <a
                href={project}
                className='text-slate-50 w-full max-w-32 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-lg items-center px-5 py-2.5 mb-2 flex'
              >
                <IconLayoutDashboard stroke={2} />
                Project
              </a>

              <a
                href={github}
                className='text-slate-50 w-full max-w-32 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-lg items-center px-5 py-2.5 mb-2 flex'
              >
                <IconBrandGithub stroke={2} />
                Github
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
