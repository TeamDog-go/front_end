import React, { Component } from 'react'
import BasicQ from './BasicQ'
// import Results from './Results'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: [],
      currentIndex: 0,
      currentQ: {}
    }
    this.addAnswer = this.addAnswer.bind(this)
    this.prevAnswer = this.prevAnswer.bind(this)
  }

  addAnswer (answerIndex, newAnswer) {
    const update = this.state.answers
    if (answerIndex === this.state.answers.length) {
      update.splice(answerIndex, 0, newAnswer)
    } else if (answerIndex !== this.state.answers.length) {
      update.splice(answerIndex, 1, newAnswer)
    }
    const index = Math.min(this.state.currentIndex + 1, this.props.questions.length - 1)
    this.setState({
      answers: update,
      currentQ: this.props.questions[index],
      currentIndex: index
    })
  }

  prevAnswer () {
    const prev = Math.max(this.state.currentIndex - 1, 0)
    this.setState({
      currentQ: this.props.questions[prev],
      currentIndex: prev
    })
  }

  componentDidMount () {
    this.setState({currentQ: this.props.questions[0]})
  }

  render () {
    if (this.state.answers.length < this.props.questions.length) {
      return (
        <div>
          <BasicQ question={this.state.currentQ} savedanswers={this.state.answers} index={this.state.currentIndex} addAnswer={this.addAnswer} prevAnswer={this.prevAnswer} />
        </div>
      )
    } else if (this.state.answers.length === this.props.questions.length) {
      return (
        <div>
          {/* <Results answers={this.state.answers} /> */}
        </div>
      )
    }
  }
}

export default Quiz
