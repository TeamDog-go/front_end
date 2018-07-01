/* global localStorage */
import React, {Component} from 'react'
import {calculation, results} from './Calculation'
import request from 'superagent'
import PQlogo from './Media/PQlogo_rev-02.svg'
import sadPug from './Media/pugSad.jpg'
// import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import {Button} from 'primereact/components/button/Button'
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion'
import {SelectButton} from 'primereact/components/selectbutton/SelectButton'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: '',
      color: '',
      final_feedback: '',
      userid: '',
      initial_feeling: ''
    }
    this.expandDetailedResults = this.expandDetailedResults.bind(this)
    this.resolveCalculation = this.resolveCalculation.bind(this)
    this.submitFinalFeelings = this.submitFinalFeelings.bind(this)
    // has this.props.feedbackStart, this.props.answers, this.props.questions
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

  componentDidMount () {
    console.log(this.props.answers)
    console.log(this.props.questions)
    const answers = this.props.answers
    const questions = this.props.questions
    this.resolveCalculation().then((response) => {
      console.log(response.score)
      console.log(response.color)
      if (window.localStorage.pupQuestUser) {
        let userid = window.localStorage.pupQuestUser
        this.setState({
          userid: userid
        })
      } else {
        let userid = 4
        this.setState({
          userid: userid
        })
      }
      this.setState({
        score: response.score,
        color: response.color,
        initial_feeling: this.props.feedbackStart,
        final_feedback: response.final_feedback
      })
    })
    console.log(this.state.userid, questions, answers)
    request
      .post(`https://polar-castle-14061.herokuapp.com/surveys.json`)
      .send({ user_id: this.state.userid, questions: questions, answers: answers })
      // .send({user_id: this.state.userid})
      .then((response) => {
        console.log(response.body.survey.id)
        window.localStorage.surveyid = response.body.survey.id
        request
          .put(`https://polar-castle-14061.herokuapp.com/results.json`)
          .send({ surveyid: window.localStorage.surveyid, final_score: this.state.score, initial_feeling: this.state.initial_feeling, color: this.state.color })
          .then((response) => {
            window.localStorage.responseId = response.body.response.id
          })
      })
  }

  expandDetailedResults () {
    let detailedResults = document.querySelector('.accordion')
    detailedResults.classList.toggle('hidden')
  }

  submitFinalFeelings (e) {
    this.setState({final_feedback: e.value})
    request
      .put(`https://polar-castle-14061.herokuapp.com/results/${window.localStorage.responseId}.json`)
      .send({ surveyid: window.localStorage.surveyid, final_score: this.state.score, initial_feeling: this.state.initial_feeling, color: this.state.color, final_feedback: this.state.final_feedback })
  }

  render () {
    // console.log(results(this.props.answers, this.props.questions))
    console.log(window.localStorage.responseId)
    var feedback = [
      {label: 'Very negative', value: 1},
      {label: 'Negative', value: 2},
      {label: 'Neutral', value: 3},
      {label: 'Positive', value: 4},
      {label: 'Very positive', value: 5}
    ]
    var sourcePath = this.props.match.path
    var source = sourcePath.match(/\/([^/]+)$/)[1]

    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div className='resultsPageDiv'>
          {this.state.color === 'red' && <img className='resultsColorImage' src={sadPug} alt='High Risk' />}
          {this.state.color === 'yellow' && <img className='resultsColorImage' src='https://tinyurl.com/yad4kqvb' alt='Medium Risk' />}
          {this.state.color === 'green' && <img className='resultsColorImage' src='https://www.happydoguk.com/media/wysiwyg/Adult-dog---we-know.jpg' alt='Low Risk' />}
          <h3 className='resultsText'>This {source} is...</h3>
          {this.state.color === 'red' && <h2>Red: High Risk</h2>}
          {this.state.color === 'yellow' && <h2>Yellow: Medium Risk</h2>}
          {this.state.color === 'green' && <h2>Green: Low Risk</h2>}

          {this.state.color === 'red' && <p>This {source} has one or more practices that are seriously risky for dogs and/or your family. <strong>It's best to look for a dog from somewhere else.</strong></p>}
          {this.state.color === 'yellow' && <p>This {source} has one or more practices that are risky for dogs and/or your family. If you marked "I don't know" for several questions, do some more research and try again! Otherwise, strongly consider looking at other places.</p>}
          {this.state.color === 'green' && <p>This {source} has good practices. This is not a guarantee for a healthy, happy dog, but it's a great start!</p>}
          <div className='result-feedback'>
            <div>Right now, what are your general feelings about this place/person?</div>
            <SelectButton className='result-feedback-score' value={this.state.final_feedback} options={feedback} onChange={this.submitFinalFeelings} />
          </div>
          <div>
            <Button className='detailedResultsButton' onClick={this.expandDetailedResults} label='Detailed Results' />
            <Accordion className='accordion hidden'>
              <AccordionTab header='Question that ranked red'>
        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
        Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
        of the family, kind and benevolent to those who give respect,
        but given to ruthless violence whenever anything stands against the good of the family.
              </AccordionTab>
              <AccordionTab header='Question that ranked yellow'>
        Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
        Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
        the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
        Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
        Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
              </AccordionTab>
              <AccordionTab header='Question that ranked green'>
        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
        third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
        now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
              </AccordionTab>
            </Accordion>
          </div>
          <div className='navButtonDiv'>
            <Button className='navButton' onClick={() => { window.location = `http://www.pupquest.org/` }} label='Learn more on Pupquest' />
            <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Test another place' />
          </div>
        </div>
      </div>
    )
  }
}

export default Results
