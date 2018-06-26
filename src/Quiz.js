import React, { Component } from 'react'

import BasicQ from './BasicQ'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: [],
      currentQ: {}
    }
    this.addAnswer = this.addAnswer.bind(this)
  }

  addAnswer (newAnswer) {
    const update = this.state.answers.concat(newAnswer)
    const totalLength = this.props.questions.length - 1
    const index = Math.min(update.length, totalLength)
    this.setState({
      answers: update,
      currentQ: this.props.questions[index]
    })
  }

  componentDidMount () {
    const index = (this.state.answers.length)
    this.setState({currentQ: this.props.questions[index]})
  }

  render () {
    console.log(this.state.answers.length, this.props.questions.length)
    return (
      <div>
        <BasicQ question={this.state.currentQ} addAnswer={this.addAnswer} />
      </div>
    )
  }
}

export default Quiz
