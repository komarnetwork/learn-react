import { Component } from 'react'
import { Slide } from 'react-awesome-reveal'

class Resume extends Component {
  render() {
    if (!this.props.data) return null
    const skillMessage = this.props.data.skillMessage

    const education = this.props.data.education.map(function (education) {
      return (
        <div className='w-full py-5' key={education.school}>
          <h3 className='text-2xl font-medium'>{education.school}</h3>
          <p className='text-gray-500'>
            {education.degree} • {education.graduated} <br />
          </p>

          <div className='py-5'>
            <p>{education.description}</p>
          </div>
        </div>
      )
    })

    const works = this.props.data.work.map(function (work) {
      return (
        <div className='w-full py-5' key={work.company}>
          <h3 className='text-2xl font-medium'>{work.company}</h3>
          <p className='text-gray-500'>
            {work.title} • {work.years}
          </p>

          <div className='py-5'>
            <p>{work.description}</p>
          </div>
        </div>
      )
    })

    const skills = this.props.data.skills.map(function (skills) {
      const shuffle = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length)
        const item = arr[randomIndex]

        return item
      }

      const array = [
        'bg-orange-600',
        'bg-green-600',
        'bg-amber-600',
        'bg-blue-600',
        'bg-red-600',
        'bg-purple-600',
      ]
      const backgroundColor = shuffle(array)

      const kelas =
        `h-6 ${backgroundColor} rounded-full ` + skills.name.toLowerCase()

      const width = skills.level

      return (
        <div key={skills.name} className='py-2'>
          <span>{skills.name}</span>
          <li className='h-6 bg-gray-200 rounded-full dark:bg-gray-700'>
            <div className={kelas} style={{ width }}></div>
          </li>
        </div>
      )
    })

    return (
      <section className='py-20 bg-slate-50' id='resume'>
        <Slide left duration={1300}>
          <div className='container px-4 mx-auto bg-'>
            <div className='flex flex-wrap justify-center items-center text-center'>
              <div className='w-full md:w-1/1 lg:w-3/4 px-4'>
                <div className='w-full block md:flex'>
                  <h2 className='uppercase underline underline-offset-8 decoration-blue-600 decoration-4 text-2xl py-5'>
                    Education
                  </h2>
                  <div className='flex-grow px-5'>{education}</div>
                </div>
                <hr className='py-6' />

                <div className='w-full block md:flex'>
                  <h2 className='uppercase underline underline-offset-8 decoration-blue-600 decoration-4 text-2xl py-5'>
                    Work
                  </h2>
                  <div className='flex-grow px-5'>{works}</div>
                </div>
                <hr className='py-6' />

                <div className='w-full md:flex'>
                  <h2 className='uppercase items-start underline underline-offset-8 decoration-blue-600 decoration-4 text-2xl py-5'>
                    Skill
                  </h2>

                  <div className='flex-grow px-5'>
                    <ul>{skills}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default Resume
