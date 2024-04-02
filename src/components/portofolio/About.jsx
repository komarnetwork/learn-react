import { IconBrandGithub } from '@tabler/icons-react'
import { Component } from 'react'
import { Fade } from 'react-awesome-reveal'

class About extends Component {
  render() {
    if (!this.props.data) return null

    const name = this.props.data.name
    const profilePic = this.props.data.image
    const bio = this.props.data.bio
    const street = this.props.data.address.street
    const city = this.props.data.address.city
    const state = this.props.data.address.statee
    const zip = this.props.data.address.zip
    const phone = this.props.data.phone
    const email = this.props.data.email
    const resumeDownload = this.props.data.resumeDownload

    return (
      <section className='py-20 bg-slate-950 text-slate-50' id='about'>
        <Fade duration={1000}>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap justify-center items-center text-center'>
              <div className='w-full md:w-1/1 lg:w-3/4 px-4 lg:mb-0'>
                <div className='w-full flex'>
                  <img
                    src={profilePic}
                    width='192'
                    height='192'
                    className='h-24 w-24 rounded-full object-cover border-[0.20rem] border-white shadow-xl hidden md:inline-flex'
                    alt='{name}'
                  />
                  <div className='flex flex-wrap py-5 px-5 selection:text-slate-50 selection:bg-indigo-400'>
                    <div className='w-full'>
                      <h2 className='text-2xl font-medium'>About Me</h2>
                    </div>
                    <div className='w-full py-5 px-3 text-gray-500'>
                      <p>{bio}</p>
                    </div>
                    <div className='w-full md:w-1/2 px-4 mb-10 lg:mb-12 text-lg leading-loose'>
                      <h3 className='text-2xl text-slate-50'>Contact Detail</h3>
                      <p className='text-gray-500'>
                        {name} <br />
                        {street} <br />
                        {city} {state}, {zip} <br />
                        {phone} <br />
                        {email}
                      </p>
                    </div>

                    <div className='w-full md:w-1/2 mb-10 lg:mb-12 text-lg text-slate-50 leading-loose'>
                      <button className='w-full max-w-44 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg items-center px-5 py-2.5 inline-flex'>
                        <IconBrandGithub stroke={2} />
                        <a href={resumeDownload}>Download CV</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    )
  }
}

export default About
