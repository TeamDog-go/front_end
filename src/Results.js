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
      userid: ''
    }
    this.expandDetailedResults = this.expandDetailedResults.bind(this)
    this.resolveCalculation = this.resolveCalculation.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    // has this.props.initial_feeling, this.props.answers, this.props.questions
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
  }

  componentDidMount () {
    console.log(this.props.questions, this.props.answer)
    const questionsAttributesData = this.props.questions.map((entry, index) => {
      return (
        {content: entry.content,
          source: entry.source,
          answers_attributes: [{
            a_content: this.props.answers[index].answer,
            a_color: this.props.answers[index].color,
            a_points: this.props.answers[index].points
          }]
        }
      )
    })
    this.resolveCalculation()
      .then((response) => {
        this.setState({
          score: response.score,
          color: response.color,
          final_feeling: response.final_feeling
        })
        return (
          {final_score: response.score,
            color: response.color,
            initial_feeling: this.props.inital_feelings}
        )
      })
      // .then((response) => {
      //   console.log(response)
      //   request
      //     .post(`https://polar-castle-14061.herokuapp.com/surveys.json`)
      //     .send({survey: { user_id: window.localStorage.pupQuestUser ? window.localStorage.pupQuestUser : 4,
      //       result_attributes: response,
      //       questions_attributes: questionsAttributesData }})
      //     .then((response) => {
      //       console.log(response)
      //       window.localStorage.surveyid = response.body.survey.id
      //       window.localStorage.resultId = response.body.survey.result.id
      //     })
      // })
  }

  componentDidUpdate () {
    if (this.state.final_feeling && window.localStorage.resultId) {
      request
        .put(`https://polar-castle-14061.herokuapp.com/results/${window.localStorage.resultId}.json`)
        .send({ final_feeling: this.state.final_feeling })
        .then((response) => {
          console.log(response)
        })
    }
  }

  expandDetailedResults () {
    let detailedResults = document.querySelector('.accordion')
    detailedResults.classList.toggle('hidden')
  }

  render () {
    console.log(window.localStorage.responseId)
    const feeling = [
      {label: 'Very negative', value: 1, class: 'answer result-feeling color-1'},
      {label: 'Negative', value: 2, class: 'answer result-feeling color-2'},
      {label: 'Neutral', value: 3, class: 'answer result-feeling color-3'},
      {label: 'Positive', value: 4, class: 'answer result-feeling color-4'},
      {label: 'Very positive', value: 5, class: 'answer result-feeling color-5'}
    ]

    var sourcePath = this.props.match.path
    var source = sourcePath.match(/\/([^/]+)$/)[1]
    const capSource = source.charAt(0).toUpperCase() + source.slice(1)
    let position
    if (this.state.score < 0) {
      position = 0
    } else if (this.state.score > 100) {
      position = 70 + 'vw'
    } else { position = 0.7 * this.state.score + 'vw' }
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

            {this.state.color === 'red' && <p className='result-text'>This {source} has one or more practices that are seriously risky for dogs and/or your family. <strong>It's best to look for a dog from somewhere else.</strong></p>}
            {this.state.color === 'yellow' && <p className='result-text'>This {source} has one or more practices that are risky for dogs and/or your family. If you marked "I don't know" for several questions, do some more research and try again! Otherwise, strongly consider looking at other places.</p>}
            {this.state.color === 'green' && <p className='result-text'>This {source} has good practices. This is not a guarantee for a healthy, happy dog, but it's a great start!</p>}

            <div className='scale-container'>
              <div className='scale'>
                <div className='scale-red' />
                <div className='scale-yellow' />
                <div className='scale-green' />
              </div>
              <div className='paw' style={{left: position}} />
            </div>
          </div>

          {/* <div className='result-box'> */}
          <div className='result-feeling-question'>
            <div>Now, how do you feel about this {source}?</div>
            <div className='result-feeling-array'>
              {feeling.map((entry, index) => {
                return (
                  <div key={index} className={entry.class}>
                    <input type='radio' id={index} value={entry.value} checked={Number(this.state.final_feeling) === Number(entry.value)} onChange={(e) => this.handleOptionChange(e)} />
                    <label htmlFor={index}>{entry.label}</label>
                  </div>)
              })}
            </div>
          </div>
          {/* </div> */}

          <div className='detailedResults'>
            <button className='detailedResultsButton' onClick={this.expandDetailedResults}>
              Show Detailed Results <FontAwesomeIcon icon='chevron-circle-down' />
            </button>
            <Accordion className='accordion hidden'>
              <AccordionTab className='detailedResultsAccordion' header='Are you allowed to visit the puppies?'>Uh oh… Visiting is the only way to know for sure what kind of place a puppy is coming from. Good breeders insist potential owners visit their puppies and will welcome you to see where they are raised. If this breeder will not let you visit, what could they be hiding? (Don’t be fooled by claims of “We don’t want our puppies to get sick”, walk away.)
              </AccordionTab>
              <AccordionTab header='Does the breeder ship puppies via airplane?'>
                Young puppies are in a period of critical development. A flight is a potentially scary and dangerous experience. Heatstroke and crate phobias are real risks. Steer clear of any breeder who offers to ship you a pup!
              </AccordionTab>
              <AccordionTab header='Is the breeder United States Department of Agriculture (USDA) licensed?'>
                Excellent! The USDA oversees farms. If a breeder is USDA licensed, they are a puppy farm! Not having this license is a GOOD thing.
              </AccordionTab>
            </Accordion>
          </div>
          <div className='navButtonDivIntro'>
            <Button className='navButton' onClick={() => { window.location = `http://www.pupquest.org/` }} label='Learn more' />
            {/* <Button className='navButton' onClick={() => { window.location = `http://www.pupquest.org/` }} label='Learn more on Pupquest' /> */}
            {/* <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Test another place' /> */}
            <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Test another' />
          </div>
        </div>
      </div>
    )
  }
}

export default Results
