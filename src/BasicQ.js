import React, {Component} from 'react'
// import {Button} from 'primereact/components/button/Button'
// import { BehaviorSubject } from 'rx'
// import {SelectButton} from 'primereact/components/selectbutton/SelectButton'

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
  }
  handleOptionChange (event) {
    this.setState({
      answer: event.target.name,
      score: event.target.dataset.score,
      value: event.target.value
    })
  }

  questionSubmit (event) {
    event.preventDefault()

    this.props.addAnswer([{
      answer: this.state.answer,
      score: this.state.score,
      value: this.state.value
    }])
  }
  render () {
    if (this.props.question.answer) {
      return (
        <div>
          <h1>{this.props.question.text}</h1>
          <form>
            {this.props.question.answer.map((entry, index) => {
              return (
                <div key={index}>
                  <input type='radio' name={entry.text} data-score={entry.score} value={entry.value} onChange={(e) => this.handleOptionChange(e)} checked={this.state.answer === entry.text} />
                  <label>{entry.text}</label>
                </div>)
            })}
          </form>
          <button>Previous</button><button type='submit' onClick={(e) => this.questionSubmit(e)}>Next</button>
        </div>
      )
    } else { return null }
  }

  // render () {
  //   if (this.props.question.answer) {
  //     const answers = this.props.question.answer.map((entry, index) => {
  //       return {
  //         key: index,
  //         label: entry.text,
  //         name: entry.score,
  //         value: entry.value
  //       }
  //     })
  //     console.log(answers)
  //     return (
  //       <div>
  //         <h1>{this.props.question.text}</h1>
  //         <form>
  //           <SelectButton options={answers} onChange={(e) => this.handleOptionChange(e)} />
  //           <SelectButton value={this.state.city} options={citySelectItems} onChange={(e) => this.setState({val: event.value})}></SelectButton>
  //         </form>
  //         <button>Previous</button><button type='submit' onClick={(e) => this.questionSubmit(e)}>Next</button>
  //       </div>
  //     )
  //   } else { return null }
  // }
}

export default BasicQ
