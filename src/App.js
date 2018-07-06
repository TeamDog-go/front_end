import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import IntroPage from './IntroPage'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
// import 'font-awesome/css/font-awesome.css'
import './App.css'
import Quiz from './Quiz'
import SelectSourcePage from './SelectSourcePage'
import Results from './Results'

// import breederQuestions from './BreederQuestions'
// import individualQuestions from './IndividualQuestions.js'
// import shelterQuestions from './ShelterQuestions.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleDown, faQuestionCircle, faChevronCircleUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronCircleDown, faQuestionCircle, faChevronCircleUp, faPlus, faMinus)

// const breederQuestions = window.localStorage.spotCheck_breederQuestions ? window.localStorage.spotCheck_breederQuestions : []
// const individualQuestions = window.localStorage.spotCheck_individualQuestions ? window.localStorage.spotCheck_individualQuestions : []
// const shelterQuestions = window.localStorage.spotCheck_shelterQuestions ? window.localStorage.spotCheck_shelterQuestions : []

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: '',
      breederQuestions: window.localStorage.spotCheck_breederQuestions ? JSON.parse(window.localStorage.spotCheck_breederQuestions) : [],
      individualQuestions: window.localStorage.spotCheck_individualQuestions ? JSON.parse(window.localStorage.spotCheck_individualQuestions) : [],
      shelterQuestions: window.localStorage.spotCheck_shelterQuestions ? JSON.parse(window.localStorage.spotCheck_shelterQuestions) : []
    }
    // what is this state even for?
  }
  // componentDidMount () {
  //   window.onbeforeunload = function () {
  //     return 'Are you sure you want to navigate away?'
  //   }
  // }

  render () {
    console.log('breeder', this.state.breederQuestions)
    console.log('individual', this.state.individualQuestions)
    console.log('shelter', this.state.shelterQuestions)
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <IntroPage {...props} />} />
        <Route path='/source' render={(props) => <SelectSourcePage {...props} />} />
        <Route path='/breeder' render={(props) => <Quiz questions={this.state.breederQuestions} {...props} />} />
        <Route path='/shelter' render={(props) => <Quiz questions={this.state.shelterQuestions} {...props} />} />
        <Route path='/individual' render={(props) => <Quiz questions={this.state.individualQuestions} {...props} />} />
        <Route path='/results' render={(props) => <Results {...props} />} />
      </div>
    )
  }
}

export default App
