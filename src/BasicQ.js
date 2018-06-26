import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'

import dogHouse from './Media/dogHouse.png'
// import { BehaviorSubject } from 'rx'
// import {SelectButton} from 'primereact/components/selectbutton/SelectButton'

class BasicQ extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: this.props.savedanswers[this.props.index] ? this.props.savedanswers[this.props.index].answer : '',
      score: '',
      value: '',
      index: ''
    }
    this.questionSubmit = this.questionSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.goBack = this.goBack.bind(this)
  }
  handleOptionChange (event) {
    console.log(event.target.dataset.index)
    this.setState({
      answer: event.target.name,
      score: event.target.dataset.score,
      value: event.target.value,
      index: event.target.dataset.index
    })
  }

  questionSubmit () {
    this.props.addAnswer(this.state.index, {
      answer: this.state.answer,
      score: this.state.score,
      value: this.state.value
    })
    this.setState({
      answer: this.props.savedanswers[this.props.index + 1] ? this.props.savedanswers[this.props.index + 1].answer : '',
      score: this.props.savedanswers[this.props.index + 1] ? this.props.savedanswers[this.props.index + 1].score : '',
      value: this.props.savedanswers[this.props.index + 1] ? this.props.savedanswers[this.props.index + 1].value : '',
      index: ''
    })
  }
  goBack () {
    this.props.prevAnswer()
    const index = Math.max(this.props.index - 1, 0)
    // const index = Math.max(this.props.index, 0)
    // console.log('THIS IS GO BACK, this.props.index', this.props.index, 'index', index)
    this.setState({
      answer: this.props.savedanswers[index] ? this.props.savedanswers[index].answer : ''})
  }

  render () {
    console.log('this.state.answer', this.state.answer, 'this.props.savedanswers- ', this.props.savedanswers, 'props index-', this.props.index, 'old answer-', this.props.savedanswers[this.props.index])
    if (this.props.question.answer) {
      return (
        <div className='megaWrapper'>
          <div className='titleDiv'>
            <header>
              <img className='headerImage' src={dogHouse} alt='logo' />
              <h2 className='header'>&nbsp;PupQuest Test</h2>
            </header>
          </div>
          <div className='introPageDiv'>
            <h1>{this.props.question.text}</h1>
            <br />
            <form>
              {this.props.question.answer.map((entry, index) => {
                return (
                  <div key={index}>
                    <input type='radio' name={entry.text} data-score={entry.score} value={entry.value} data-index={this.props.index} onChange={(e) => this.handleOptionChange(e)} checked={this.state.answer === entry.text} />
                    <label>{entry.text}</label>
                  </div>)
              })}
            </form>
          </div>
          <div className='navButtonDiv'>
            {/* <Button className='navButton' onClick={this.props.removeAnswer} label='Previous Question' /> */}
            {/* <Button className='navButton' onClick={this.props.prevAnswer} label='Previous Question' /> */}
            <Button className='navButton' onClick={this.goBack} label='Previous Question' />
            <Button className='navButton' onClick={this.questionSubmit} label='Next Question' />
          </div>
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
