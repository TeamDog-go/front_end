import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import PQlogo from './Media/PQlogo_rev-02.svg'

class Feedback extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: ''
    }
    this.questionSubmit = this.questionSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange (event) {
    this.setState({
      answer: event.target.value
    })
  }

  questionSubmit () {
    this.props.setFeedback(this.state.answer)
  }

  render () {
    const feedback = [
      {label: 'Very negative', value: 1},
      {label: 'Negative', value: 2},
      {label: 'Neutral', value: 3},
      {label: 'Positive', value: 4},
      {label: 'Very positive', value: 5}
    ]
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div className='feedback'>
          <div className='feedback-Question'>
            Right now, what are your general feelings about this place/person?
          </div>
          <div >
            <form className='feedback-Answers'>
              {feedback.map((entry, index) => {
                return (
                  <div key={index} className='answer feedback'>
                    <input type='radio' id={index} value={entry.value} checked={Number(this.state.answer) === Number(entry.value)} onChange={(e) => this.handleOptionChange(e)} />
                    <label htmlFor={index}>{entry.label}</label>
                  </div>)
              })}
            </form>
          </div>
        </div>
        <div className='navButtonDiv'>
          <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Previous' />
          <Button className='navButton' onClick={this.questionSubmit} label='Next Question' />
        </div>
      </div>
    )
  }
}

export default Feedback
