import React, {Component} from 'react'
import {calculation, results} from './Calculation'
import request from 'superagent'

import PQlogo from './Media/PQlogo.jpg'
import sadPug from './Media/pugSad.jpg'
// import pawprint from './Media/pawprint.png'
// import dogHouse from './Media/dogHouse.png'

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
      feedbackEnd: ''
    }
    this.expandDetailedResults = this.expandDetailedResults.bind(this)
    // has this.props.feedbackStart, this.props.answers, this.props.questions
  }
  
//  componentDidUpdate () {
    // eventual plan is to post/make survey when page loads, submit survey, then PATCH the final response
    // const results = {
    //   initial_feedback: this.props.feedbackStart,
    //   final_feedback: this.state.feedbackEnd,
    //   final_score: this.state.score,
    //   color: this.state.color
    // }
    // if (this.state.feedbackEnd) {
    //   let userid
    //   if (window.localStorage.pupQuestUser) {
    //     userid = window.localStorage.pupQuestUser
    //   } else { userid = 4 }
    //   request
    //     .post(`https://polar-castle-14061.herokuapp.com/surveys.json`)
    //     .send({user_id: userid})
    //     .then((response) => {
    //       console.log(response.body.survey.id)
    //       return response.body.survey.id
    //     })
      // submit to server
    // }
  // }
  componentDidMount () {
    const answers = this.props.answers
    new Promise(function (resolve, reject) {
      if (answers) {
        resolve(calculation(answers))
      } else {
        reject(new Error('Invalid Data'))
      }
    }).then((response) => {
      this.setState({
        score: response.score,
        color: response.color
      })
    }).catch((error) => console.log('Error', error))
  }

  expandDetailedResults () {
    let detailedResults = document.querySelector('.accordion')
    detailedResults.classList.toggle('hidden')
  }

  render () {
    console.log(results(this.props.answers, this.props.questions))
    var feedback = [
      {label: 'Very negative', value: 1},
      {label: 'Negative', value: 2},
      {label: 'Neutral', value: 3},
      {label: 'Positive', value: 4},
      {label: 'Very positive', value: 5}
    ]

    var sourcePath = this.props.match.path
    var source = sourcePath.match(/\/([^/]+)$/)[1]
    console.log(source)

    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div className='resultsPageDiv'>
          {this.state.color === 'red' && <img className='resultsColorImage' src={sadPug} />}
          {this.state.color === 'yellow' && <img className='resultsColorImage' src='https://tinyurl.com/yad4kqvb' />}
          {this.state.color === 'green' && <img className='resultsColorImage' src='https://www.happydoguk.com/media/wysiwyg/Adult-dog---we-know.jpg' />}
          <h3 className='resultsText'>This {source} is...</h3>
          {this.state.color === 'red' && <h2>Red: High Risk</h2>}
          {this.state.color === 'yellow' && <h2>Yellow: Medium Risk</h2>}
          {this.state.color === 'green' && <h2>Green: Low Risk</h2>}

          {this.state.color === 'red' && <p>This {source} has one or more practices that are seriously risky for dogs and/or your family. <strong>It's best to look for a dog from somewhere else.</strong>.</p>}
          {this.state.color === 'yellow' && <p>This {source} has one or more practices that are risky for dogs and/or your family. If you marked "I don't know" for several questions, do some more research and try again! Otherwise, strongly consider looking at other places.</p>}
          {this.state.color === 'green' && <p>This {source} has good practices. This is not a guarantee for a healthy, happy dog, but it's a great start!</p>}
          <div className='result-feedback'>
            <div className='feedbackQuestionResults'>What are your general feelings about this place/person now?</div>
            <SelectButton value={this.state.feedbackEnd} options={feedback} onChange={(e) => this.setState({feedbackEnd: e.value})} />
          </div>

          <div className='detailedResultsDiv'>
            <Button className='detailedResultsButton' onClick={this.expandDetailedResults} label='Show Detailed Results' />
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
        <div className='navButtonDiv'>
          <Button className='navButton' onClick={() => { window.location = `http://www.pupquest.org/` }} label='Learn more on Pupquest' />
          <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Test another place' />
        </div>
      </div>
    )
  }
}

export default Results
