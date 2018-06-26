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
    this.removeAnswer = this.removeAnswer.bind(this)
    this.prevAnswer = this.prevAnswer.bind(this)
  }

  addAnswer (answerIndex, newAnswer) {
    console.log('add answer', answerIndex, newAnswer)
    const update = this.state.answers
    if (answerIndex === this.state.answers.length) {
      update.splice(answerIndex, 0, newAnswer)
    } else if (answerIndex !== this.state.answers.length) {
      update.splice(answerIndex, 1, newAnswer)
    }
    // console.log({update})
    const totalLength = this.props.questions.length - 1
    const index = Math.min(update.length, totalLength)
    this.setState({
      answers: update,
      currentQ: this.props.questions[index],
      index: index
    })
  }

  removeAnswer () {
    // console.log(this.state.answers)
    this.state.answers.pop()
    // console.log(this.state.answers)
    const totalLength = this.props.questions.length - 1
    const index = Math.min(this.state.answers.length, totalLength)
    this.setState({
      answers: this.state.answers,
      currentQ: this.props.questions[index],
      index: index
    })
  }
  prevAnswer () {
    const prev = this.props.questions.indexOf(this.state.currentQ) - 1
    const index = Math.max(prev, 0)
    // console.log('prev answer', prev, index)
    this.setState({
      currentQ: this.props.questions[index],
      index: index
    })
  }

  componentDidMount () {
    const index = (this.state.answers.length)
    this.setState({
      currentQ: this.props.questions[index],
      index: index})
  }

  render () {
    // console.log('Quiz Render answer array', this.state.answers, 'answer array length', this.state.answers.length, 'props array length', this.props.questions.length)
    return (
      <div>
        <BasicQ question={this.state.currentQ} savedanswers={this.state.answers} index={this.state.index} addAnswer={this.addAnswer} removeAnswer={this.removeAnswer} prevAnswer={this.prevAnswer} />
      </div>
    )
  }
}

export default Quiz
