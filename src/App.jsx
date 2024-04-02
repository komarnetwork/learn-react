import React from 'react'
import Header from './components/portofolio/Header'
import About from './components/portofolio/About'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 'bar',
      resumeData: {},
    }
  }

  getResumeData() {
    $.ajax({
      url: './resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
        alert(err)
      },
    })
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
    return (
      <>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
      </>
    )
  }
}

export default App
