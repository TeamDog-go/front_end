import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './App.css'

import Quiz from './Quiz'
import IntroPage from './IntroPage'
import SelectSourcePage from './SelectSourcePage'

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
    this.updatesourceQ = this.updateSourceQ.bind(this)
  }

  updateSourceQ (source, questions) {
    if (source === 1) {
      this.setState({breederQuestions: questions})
    } if (source === 2) {
      this.setState({shelterQuestions: questions})
    } if (source === 3) {
      this.setState({individualQuestions: questions})
    }
  }

  render () {
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <IntroPage {...props} />} />
        <Route path='/source' render={(props) => <SelectSourcePage {...props} updateSource={this.updatesourceQ} />} />
        <Route path='/breeder' render={(props) => <Quiz questions={this.state.breederQuestions} firstQ={this.state.breederQuestions[0]} {...props} />} />
        <Route path='/shelter' render={(props) => <Quiz questions={this.state.shelterQuestions} firstQ={this.state.shelterQuestions[0]}{...props} />} />
        <Route path='/individual' render={(props) => <Quiz questions={this.state.individualQuestions} firstQ={this.state.individualQuestions[0]} {...props} />} />
      </div>
    )
  }
}

export default App
