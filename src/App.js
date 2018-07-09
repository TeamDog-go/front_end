import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import IntroPage from './IntroPage'
import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
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

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: '',
      breederQuestions: window.localStorage.spotCheck_breederQuestions ? JSON.parse(window.localStorage.spotCheck_breederQuestions) : [],
      individualQuestions: window.localStorage.spotCheck_individualQuestions ? JSON.parse(window.localStorage.spotCheck_individualQuestions) : [],
      shelterQuestions: window.localStorage.spotCheck_shelterQuestions ? JSON.parse(window.localStorage.spotCheck_shelterQuestions) : []
    }
    this.updateBreederQ = this.updateBreederQ.bind(this)
    this.updateIndividualQ = this.updateIndividualQ.bind(this)
    this.updateShelterQ = this.updateShelterQ.bind(this)
  }
  updateBreederQ (questions) {
    this.setState({ breederQuestions: questions })
  }
  updateIndividualQ (questions) {
    this.setState({ individualQuestions: questions })
  }
  updateShelterQ (questions) {
    this.setState({ shelterQuestions: questions })
  }

  render () {
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <IntroPage {...props} />} />
        <Route path='/source' render={(props) => <SelectSourcePage {...props} updateBreederQ={this.updateBreederQ} updateIndividualQ={this.updateIndividualQ} updateShelterQ={this.updateShelterQ} />} />
        <Route path='/breeder' render={(props) => <Quiz questions={this.state.breederQuestions} firstQ={this.state.breederQuestions[0]} {...props} />} />
        <Route path='/shelter' render={(props) => <Quiz questions={this.state.shelterQuestions} firstQ={this.state.shelterQuestions[0]}{...props} />} />
        <Route path='/individual' render={(props) => <Quiz questions={this.state.individualQuestions} firstQ={this.state.individualQuestions[0]} {...props} />} />
        <Route path='/results' render={(props) => <Results {...props} />} />
      </div>
    )
  }
}

export default App
