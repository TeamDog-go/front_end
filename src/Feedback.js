import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'

import PQlogo from './Media/PQlogo.jpg'

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
    const scale = [1, 2, 3, 4, 5]
    return (
      <div className='megaWrapper'>
        <header>
          <img className='headerImage' src={PQlogo} />
          <h2 className='header'>&nbsp;PupQuest Test</h2>
        </header>
        <div className='feedback'>
          <div className='feedback-Question'>
            How likely are you right now to purchase from your chosen source?
          </div>
          <div >
            <form className='feedback-Answers'>
              {scale.map((entry, index) => {
                return (
                  <div key={index} className='answer feedback'>
                    <input type='radio' id={index} value={entry} checked={Number(this.state.answer) === Number(entry)} onChange={(e) => this.handleOptionChange(e)} />
                    <label for={index}>{entry}</label>
                  </div>)
              })}
            </form>
          </div>
        </div>
        <div className='navButtonDiv'>
          <Button className='navButton' onClick={this.questionSubmit} label='Next Question' />
        </div>
      </div>
    )
  }
}

export default Feedback
