import React, {Component} from 'react'
import {ProgressBar} from 'primereact/components/progressbar/ProgressBar'
import {Growl} from 'primereact/components/growl/Growl'
import PQlogo from './Media/PQlogo_rev-02.svg'

class BasicQ extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: '',
      points: '',
      color: '',
      value: 0,
      option_id: ''
    }
    this.questionSubmit = this.questionSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
  }
  handleOptionChange (event) {
    if (this.cancelTimeout) {
      clearTimeout(this.cancelTimeout)
    }
    this.setState({
      answer: event.target.name,
      points: event.target.dataset.points,
      color: event.target.value,
      value: 10 + 10 * this.props.savedanswers.length,
      option_id: event.target.id
    })
    const body = {
      answer: event.target.name,
      points: event.target.dataset.points,
      color: event.target.value,
      option_id: event.target.id,
      question_id: this.props.question.id
    }
    this.cancelTimeout = setTimeout(() => {
      this.props.addAnswer(this.props.index, body)
      const next = Math.min(this.props.index + 1, this.props.savedanswers.length)
      if (this.props.index <= this.props.savedanswers.length) {
        this.setState({
          answer: this.props.savedanswers[next] ? this.props.savedanswers[next].answer : '',
          points: this.props.savedanswers[next] ? this.props.savedanswers[next].points : '',
          option_id: this.props.savedanswers[next] ? this.props.savedanswers[next].option_id : '',
          color: this.props.savedanswers[next] ? this.props.savedanswers[next].color : ''
        })
      }
    }, 2750)
  }

  questionSubmit () {
    if (this.cancelTimeout) {
      clearTimeout(this.cancelTimeout)
    }
    this.props.addAnswer(this.props.index, {
      answer: this.state.answer,
      points: this.state.points,
      color: this.state.color,
      question_id: this.props.question.id,
      option_id: this.state.option_id
    })
    const next = Math.min(this.props.index + 1, this.props.savedanswers.length)
    if (this.props.index <= this.props.savedanswers.length) {
      this.setState({
        answer: this.props.savedanswers[next] ? this.props.savedanswers[next].answer : '',
        points: this.props.savedanswers[next] ? this.props.savedanswers[next].points : '',
        option_id: this.props.savedanswers[next] ? this.props.savedanswers[next].option_id : '',
        color: this.props.savedanswers[next] ? this.props.savedanswers[next].color : ''
      })
    }
  }

  previousQuestion () {
    this.props.prevAnswer()
    const prev = Math.max(this.props.index - 1, 0)
    this.setState({
      answer: this.props.savedanswers[prev] ? this.props.savedanswers[prev].answer : '',
      points: this.props.savedanswers[prev] ? this.props.savedanswers[prev].points : '',
      option_id: this.props.savedanswers[prev] ? this.props.savedanswers[prev].option_id : '',
      color: this.props.savedanswers[prev] ? this.props.savedanswers[prev].color : ''
    })
  }

  render () {
    if (this.props.question.options) {
      return (
        <div className='megaWrapper'>
          <Growl position='bottomright'ref={(el) => { this.growl = el }} />
          <div className='titleDiv'>
            <header>
              <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
              <h2 className='header'>&nbsp;Spot Check</h2>
            </header>
          </div>
          <ProgressBar value={this.state.value} showValue={false} />
          <div className='basicQuestion'>
            <div className='basicQuestion-Question'>
              {this.props.question.content}
            </div>
            <div className='basicQuestion-Answers'>
              <form>
                {this.props.question.options.map((entry, index) => {
                  return (
                    <div key={index} className='answer'>
                      <input type='radio' id={entry.o_id} name={entry.o_content} data-points={entry.points} value={entry.o_color} onChange={(e) => this.handleOptionChange(e)} checked={this.state.answer === entry.o_content} />
                      <label htmlFor={entry.o_id} >{entry.o_content}</label>
                    </div>)
                })}
              </form>
            </div>
          </div>
          <div className='navButtonDiv'>
            <button className='arrow back active' onClick={this.previousQuestion} />
            {!this.state.answer && <button className='arrow next' onClick={() => { this.growl.show({ severity: 'warn', life: 1500, detail: 'Please choose a response before continuing the quiz' }) }} label='Next Question' />}
            {this.state.answer && <button className='arrow next active' onClick={this.questionSubmit} />}
          </div>
        </div>
      )
    } else { return null }
  }
}

export default BasicQ
