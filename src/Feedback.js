import React, {Component} from 'react'
import PQlogo from './Media/PQlogo_rev-02.svg'
import {Growl} from 'primereact/components/growl/Growl'

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
      {label: 'Very negative', value: 1, class: 'answer feedback color-1'},
      {label: 'Negative', value: 2, class: 'answer feedback color-2'},
      {label: 'Neutral', value: 3, class: 'answer feedback color-3'},
      {label: 'Positive', value: 4, class: 'answer feedback color-4'},
      {label: 'Very positive', value: 5, class: 'answer feedback color-5'}
    ]
    return (
      <div className='megaWrapper'>
        <Growl position='bottomright'ref={(el) => { this.growl = el }} />
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
                  <div key={index} className={entry.class}>
                    <input type='radio' id={index} value={entry.value} checked={Number(this.state.answer) === Number(entry.value)} onChange={(e) => this.handleOptionChange(e)} />
                    <label htmlFor={index}>{entry.label}</label>
                  </div>)
              })}
            </form>
          </div>
        </div>
        <div className='navButtonDiv'>
          <button className='arrow back active' onClick={() => this.props.history.push('/source')} />
          {!this.state.answer && <button className='arrow next' onClick={() => { this.growl.show({ severity: 'warn', life: 1500, detail: 'Please choose a response before continuing the quiz' }) }} label='Next Question' />}
          {this.state.answer && <button className='arrow next active' onClick={this.questionSubmit} />}
        </div>
      </div>
    )
  }
}

export default Feedback
