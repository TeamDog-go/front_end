import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'

import PQlogo from './Media/PQlogo.jpg'

class BasicQ extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: '',
      score: '',
      value: ''
    }
    this.questionSubmit = this.questionSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
  }
  handleOptionChange (event) {
    this.setState({
      answer: event.target.name,
      score: event.target.dataset.score,
      value: event.target.value
    })
  }

  questionSubmit () {
    this.props.addAnswer(this.props.index, {
      answer: this.state.answer,
      score: this.state.score,
      value: this.state.value
    })
    const next = Math.min(this.props.index + 1, this.props.savedanswers.length)
    this.setState({
      answer: this.props.savedanswers[next] ? this.props.savedanswers[next].answer : '',
      score: this.props.savedanswers[next] ? this.props.savedanswers[next].score : '',
      value: this.props.savedanswers[next] ? this.props.savedanswers[next].value : ''
    })
  }
  previousQuestion () {
    this.props.prevAnswer()
    const prev = Math.max(this.props.index - 1, 0)
    this.setState({
      answer: this.props.savedanswers[prev] ? this.props.savedanswers[prev].answer : '',
      score: this.props.savedanswers[prev] ? this.props.savedanswers[prev].score : '',
      value: this.props.savedanswers[prev] ? this.props.savedanswers[prev].value : ''
    })
  }

  render () {
    // console.log('props.saveanswers', this.props.savedanswers, 'props index-', this.props.index)
    if (this.props.question.answer) {
      return (
        <div className='megaWrapper'>
          <div className='titleDiv'>
            <header>
              <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
              <h2 className='header'>&nbsp;PupQuest Test</h2>
            </header>
          </div>
          <div className='basicQuestion'>
            <div className='basicQuestion-Question'>
              {this.props.question.text}
            </div>
            <div className='basicQuestion-Answers'>
              <form>
                {this.props.question.answer.map((entry, index) => {
                  return (
                    <div key={index} className='answer'>
                      <input type='radio' id={index} name={entry.text} data-score={entry.score} value={entry.value} onChange={(e) => this.handleOptionChange(e)} checked={this.state.answer === entry.text} />
                      <label htmlFor={index} >{entry.text}</label>
                    </div>)
                })}
              </form>
            </div>
          </div>
          <div className='navButtonDiv'>
            <Button className='navButton' onClick={this.previousQuestion} label='Previous Question' />
            <Button className='navButton' onClick={this.questionSubmit} label='Next Question' />
          </div>
        </div>
      )
    } else { return null }
  }
}

export default BasicQ
