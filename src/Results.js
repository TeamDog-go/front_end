import React, {Component} from 'react'
import {calculation} from './Calculation'
import request from 'superagent'
import PQlogo from './Media/PQlogo_rev-02.svg'
import redDog from './Media/red-doggo.png'
import yellowDog from './Media/yellow-doggo.png'
import greenDog from './Media/green-doggo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {Tooltip} from 'primereact/components/tooltip/Tooltip'
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
    // this.submitFinalFeeling = this.submitFinalFeeling.bind(this)
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
      .then((response) => {
        console.log(response)
        request
          .post(`https://polar-castle-14061.herokuapp.com/surveys.json`)
          .send({survey: { user_id: window.localStorage.pupQuestUser ? window.localStorage.pupQuestUser : 4,
            result_attributes: response,
            questions_attributes: questionsAttributesData }})
          .then((response) => {
            console.log(response)
            window.localStorage.surveyid = response.body.survey.id
            window.localStorage.resultId = response.body.survey.result.id
          })
      })
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

    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div className='resultsPageDiv'>
          {this.state.color === 'red' && <img className='resultsColorImage' src={redDog} alt='High Risk' />}
          {this.state.color === 'yellow' && <img className='resultsColorImage' src={yellowDog} alt='Medium Risk' />}
          {this.state.color === 'green' && <img className='resultsColorImage' src={greenDog} alt='Low Risk' />}
          {this.state.color === 'red' && <h3>{capSource} rating: <strong className='resultsText'>Red- High Risk</strong></h3>}
          {this.state.color === 'yellow' && <h3>{capSource} rating: <strong className='resultsText'>Yellow- Medium Risk</strong></h3>}
          {this.state.color === 'green' && <h3>{capSource} rating: <strong className='resultsText'>Green- Low Risk</strong></h3>}

          {this.state.color === 'red' && <p>This {source} has one or more practices that are seriously risky for dogs and/or your family. <strong>It's best to look for a dog from somewhere else.</strong></p>}
          {this.state.color === 'yellow' && <p>This {source} has one or more practices that are risky for dogs and/or your family. If you marked "I don't know" for several questions, do some more research and try again! Otherwise, strongly consider looking at other places.</p>}
          {this.state.color === 'green' && <p>This {source} has good practices. This greatly increases the chances your future dog will be happy and healthy! (It's not a guarantee, but it's a great start!)</p>}
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
          <div>
            <div className='detailedResults'>
              <button className='detailedResultsButton' onClick={this.expandDetailedResults}>
              Show Detailed Results <FontAwesomeIcon icon='chevron-circle-down' />
              </button>
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
          </div>
          <div className='navButtonDiv nav-results'>
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
