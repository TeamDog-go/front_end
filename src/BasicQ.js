import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'

import PQlogo from './Media/PQlogo.jpg'

class BasicQ extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: '',
      points: '',
      color: ''
    }
    this.questionSubmit = this.questionSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
  }
  handleOptionChange (event) {
    this.setState({
      answer: event.target.name,
      points: event.target.dataset.points,
      color: event.target.value
    })
  }

  questionSubmit () {
    this.props.addAnswer(this.props.index, {
      answer: this.state.answer,
      points: this.state.points,
      color: this.state.color,
      question_id: this.props.question.id
    })
    const next = Math.min(this.props.index + 1, this.props.savedanswers.length)
    this.setState({
      answer: this.props.savedanswers[next] ? this.props.savedanswers[next].answer : '',
      points: this.props.savedanswers[next] ? this.props.savedanswers[next].points : '',
      color: this.props.savedanswers[next] ? this.props.savedanswers[next].color : ''
    })
  }
  previousQuestion () {
    this.props.prevAnswer()
    const prev = Math.max(this.props.index - 1, 0)
    this.setState({
      answer: this.props.savedanswers[prev] ? this.props.savedanswers[prev].answer : '',
      points: this.props.savedanswers[prev] ? this.props.savedanswers[prev].points : '',
      color: this.props.savedanswers[prev] ? this.props.savedanswers[prev].color : ''
    })
  }

  render () {
    // console.log('props.saveanswers', this.props.savedanswers, 'props index-', this.props.index)
    if (this.props.question.options) {
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
              {this.props.question.content}
            </div>
            <div className='basicQuestion-Answers'>
              <form>
                {this.props.question.options.map((entry, index) => {
                  return (
                    <div key={index} className='answer'>
                      <input type='radio' id={index} name={entry.o_content} data-points={entry.points} value={entry.o_color} onChange={(e) => this.handleOptionChange(e)} checked={this.state.answer === entry.o_content} />
                      <label htmlFor={index} >{entry.o_content}</label>
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
