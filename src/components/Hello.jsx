import React from 'react'

class Title extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'ini adalah title',
      subTitle: 'ini subtitle',
    }
  }

  changeTitle = () => {
    this.setState({
      title: 'Belajar ReactJS di MySkill',
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>{this.state.subTitle}</h1>
        <button onClick={this.changeTitle}>Change Title</button>
      </div>
    )
  }
}

export default Title
