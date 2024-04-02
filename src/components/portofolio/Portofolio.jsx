import { Component } from 'react'
import Fade from 'react-awesome-reveal'
class Portofolio extends Component {
  render() {
    if (!this.props.data) return null

    let id = 0
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = 'images/portofolio/' + projects.image

      return (
        <li key={id++}>
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
            <a href='#'>
              <img
                className='rounded-t-lg'
                src={projectImage}
                alt={projects.title}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h3 className='mb-2 font-bold tracking-tight text-gray-600'>
                  {projects.title}
                </h3>
              </a>
            </div>
          </div>
        </li>
      )
    })

    return (
      <section className='py-20 bg-gray-200' id='portofolio'>
        <Fade left duration={1000} distance='40px'>
          <div className='container md:w-1/1 lg:w-2/3 px-4 mx-auto'>
            <div className='justify-center items-center text-center'>
              <div className='px-5'>
                <h3 className='text-2xl uppercase font-medium text-gray-900'>
                  Check Out Some Of My Works
                </h3>
                <div id='porotoflio-wrapper'>
                  <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 py-5 justify-center'>
                    {projects}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    )
  }
}

export default Portofolio
