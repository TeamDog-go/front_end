import React, {Component} from 'react'
import {calculation} from './Calculation'
import request from 'superagent'
import PQlogo from './Media/PQlogo_rev-02.svg'
import redDog from './Media/ResultDogR.jpg'
import yellowDog from './Media/ResultDogY.jpg'
import greenDog from './Media/ResultDogG.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Button} from 'primereact/components/button/Button'
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: '',
      color: '',
      final_feeling: '',
      // userid: '',
      resultsIcon: 'chevron-circle-down',
      feedbackArray: ''
    }
    this.expandDetailedResults = this.expandDetailedResults.bind(this)
    this.resolveCalculation = this.resolveCalculation.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.resultsIconClick = this.resultsIconClick.bind(this)
    this.capitalize = this.capitalize.bind(this)
  }

  capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  resolveCalculation () {
    console.log(this.props.answers)
    let answers = this.props.answers
    return new Promise(function (resolve, reject) {
      // if (this.props.answers) {
      resolve(calculation(answers))
      // } else {
      // reject(new Error('Invalid Data'))
      // }
    }
    )
  }
  handleOptionChange (event) {
    this.setState({
      final_feeling: event.target.value
    })
    let feelingConfirmation = document.querySelector('.feelingConfirmation')
    feelingConfirmation.classList.remove('hidden')
  }

  resultsIconClick (event) {
    if (this.state.resultsIcon === 'chevron-circle-down') {
      this.setState({
        resultsIcon: 'chevron-circle-up'
      })
    } else {
      this.setState({
        resultsIcon: 'chevron-circle-down'
      })
    }
  }

  componentDidMount () {
    console.log(this.props.questions, this.props.answers)
    const answersArray = []
    this.props.answers.map((entry, index) => {
      answersArray.push({
        option_id: this.props.answers[index].option_id
      })
      return (entry)
    })
    console.log(answersArray)
    this.resolveCalculation()
      .then((response) => {
        this.setState({
          score: response.score,
          color: response.color
        })
        console.log(response)
        console.log(this.state.color, this.state.score, this.props.initial_feeling)
        request
          .post(`https://polar-castle-14061.herokuapp.com/surveys.json`)
          .send({survey: { user_id: 1,
            category_id: 1,
            final_score: this.state.score,
            initial_feeling: this.props.initial_feeling,
            color: this.state.color,
            answers_attributes: answersArray
          }})
          .then((response) => {
            const feedbackArray = []
            console.log(response)
            window.localStorage.surveyid = response.body.survey.id
            console.log(window.localStorage.surveyid)
            this.props.questions.map((entry, index) => {
              feedbackArray.push({
                questionContent: entry.content,
                answerContent: response.body.survey.answers[index].option_content,
                answerFeedback: response.body.survey.answers[index].option_feedback,
                answerColor: this.capitalize(response.body.survey.answers[index].option_color)
              })
              console.log(feedbackArray)
              this.setState({
                feedbackArray: feedbackArray
              })
              console.log(this.state.feedbackArray)
            })
          })
      })
  }

  componentDidUpdate () {
    if (this.state.final_feeling) {
      request
        .put(`https://polar-castle-14061.herokuapp.com/surveys/${window.localStorage.surveyid}.json`)
        .send({ final_feeling: this.state.final_feeling })
        .then((response) => {
          console.log(response)
        })
    }
  }

  expandDetailedResults () {
    let detailedResults = document.querySelector('.accordion')
    detailedResults.classList.toggle('hidden')
    if (this.state.resultsIcon === 'chevron-circle-down') {
      this.setState({
        resultsIcon: 'chevron-circle-up'
      })
    } else {
      this.setState({
        resultsIcon: 'chevron-circle-down'
      })
    }
  }

  render () {
    const feeling = [
      {label: 'Very Poor', value: 1, class: 'answer result-feeling color-1'},
      {label: 'Poor', value: 2, class: 'answer result-feeling color-2'},
      {label: 'Average', value: 3, class: 'answer result-feeling color-3'},
      {label: 'High', value: 4, class: 'answer result-feeling color-4'},
      {label: 'Very High', value: 5, class: 'answer result-feeling color-5'}
    ]

    const feedbackArray = this.state.feedbackArray

    var sourcePath = this.props.match.path
    var source = sourcePath.match(/\/([^/]+)$/)[1]
    const capSource = source.charAt(0).toUpperCase() + source.slice(1)

    let position
    if (this.state.score < 0) {
      position = 0
    } else if (this.state.score > 100) {
      position = 99 + '%'
    } else { position = this.state.score + '%' }

    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;Spot Check</h2>
          </header>
        </div>
        <div className='resultsPageDiv'>
          {this.state.color === 'red' && <img className='resultsColorImage' src={redDog} alt='High Risk' />}
          {this.state.color === 'yellow' && <img className='resultsColorImage' src={yellowDog} alt='Medium Risk' />}
          {this.state.color === 'green' && <img className='resultsColorImage' src={greenDog} alt='Low Risk' />}

          <div className='result-info'>
            {this.state.color === 'red' && <p className='result-id'>{capSource} rating: <strong className='result-rank'>High Risk</strong></p>}
            {this.state.color === 'yellow' && <p className='result-id'>{capSource} rating: <strong className='result-rank'>Medium Risk</strong></p>}
            {this.state.color === 'green' && <p className='result-id'>{capSource} rating: <strong className='result-rank'>Low Risk</strong></p>}

            {this.state.color === 'red' && <p className='result-text'>This {source} has one or more practices that are seriously risky for your dog and/or family. <strong>It's best to look for a dog from somewhere else. </strong>Click "Show More About My Answers" below to find out more.</p>}
            {this.state.color === 'yellow' && <p className='result-text'>This {source} has one or more practices that are risky for dogs and/or your family. Click "Show More About My Answers" below to find out more.</p>}
            {this.state.color === 'green' && <p className='result-text'>This {source} has good practices. This gives you the best chance of getting a happy, healthy dog! (It's not a guarantee, but it's a great start!)Click "Show More About My Answers" below to find out more.</p>}

            <div className='scale-container'>
              <div className='scale'>
                <div className='scale-green' />
                <div className='scale-yellow' />
                <div className='scale-red' />
              </div>
              <div className='paw' style={{right: position}} />
            </div>
          </div>
          <div className='result-box'>

            <div className='result-feeling-question'>
              <h4>One Last Question!</h4>
              <div>Now, what quality do you feel this {source} is?</div>
              <div className='result-feeling-array'>
                {feeling.map((entry, index) => {
                  return (
                    <div key={index} className={entry.class}>
                      <input type='radio' id={index} value={entry.value} checked={Number(this.state.final_feeling) === Number(entry.value)} onChange={(e) => this.handleOptionChange(e)} />
                      <label htmlFor={index}>{entry.label}</label>
                    </div>)
                })}
              </div>
              <p className='feelingConfirmation hidden'><strong>Thank you for your feedback!</strong></p>
            </div>
          </div>

          <div className='detailedResults'>
            <button className='detailedResultsButton' onClick={this.expandDetailedResults}>
              Show More About My Answers<FontAwesomeIcon className='detailedResultsIcon' icon={this.state.resultsIcon} />
            </button>
            {this.state.feedbackArray ? <div className='result-feeling-array'>
              <Accordion className='accordion hidden'>
                {feedbackArray.map((entry, index) => {
                  return (
                    // <div key={index} className={entry.color}>
                    <AccordionTab headerClassName={entry.answerColor} header={entry.questionContent}><strong>Your Answer:</strong> {entry.answerContent} <br /><strong>Risk Level: </strong>{entry.answerColor}<br /><br />{entry.answerFeedback}
                    </AccordionTab>
                    // </div>
                  )
                })}
              </Accordion>
            </div>
              : <p>An error has occurred</p>}
          </div>
          <div className='navButtonDivIntro'>
            <Button className='navButton' onClick={() => { window.location = `http://www.pupquest.org/` }} label='Learn more' />
            <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Test another' />
          </div>
        </div>
      </div>
    )
  }
}

export default Results
