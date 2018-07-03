import React, {Component} from 'react'
import PQlogo from './Media/PQlogo_rev-02.svg'
import {Growl} from 'primereact/components/growl/Growl'

class feeling extends Component {
  constructor (props) {
    super(props)
    this.state = {
      feeling: ''
    }
    this.questionSubmit = this.questionSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange (event) {
    this.setState({
      feeling: event.target.value
    })
  }

  questionSubmit () {
    this.props.setInitialFeeling(this.state.feeling)
  }

  render () {
    const feeling = [
      {label: 'Very negative', value: 1, class: 'answer feeling color-1'},
      {label: 'Negative', value: 2, class: 'answer feeling color-2'},
      {label: 'Neutral', value: 3, class: 'answer feeling color-3'},
      {label: 'Positive', value: 4, class: 'answer feeling color-4'},
      {label: 'Very positive', value: 5, class: 'answer feeling color-5'}
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
        <div className='feeling-question'>
            Right now, what are your general feelings about this place/person?
        </div>
        <div className='feeling-array'>
          <div >
            <form>
              {feeling.map((entry, index) => {
                return (
                  <div key={index} className={entry.class}>
                    <input type='radio' id={index} value={entry.value} checked={Number(this.state.feeling) === Number(entry.value)} onChange={(e) => this.handleOptionChange(e)} />
                    <label htmlFor={index}>{entry.label}</label>
                  </div>)
              })}
            </form>
          </div>
        </div>
        <div className='navButtonDiv'>
          <button className='arrow back active' onClick={() => this.props.history.push('/source')} />
          {!this.state.feeling && <button className='arrow next' onClick={() => { this.growl.show({ severity: 'warn', life: 1500, detail: 'Please choose a response before continuing the quiz' }) }} label='Next Question' />}
          {this.state.feeling && <button className='arrow next active' onClick={this.questionSubmit} />}
        </div>
      </div>
    )
  }
}

export default feeling
