import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import IntroPage from './IntroPage'
import 'primereact/resources/themes/pepper-grinder/theme.css'
import 'primereact/resources/primereact.min.css'
import './App.css'
import breederQuestions from './BreederQuestions'
import individualQuestions from './IndividualQuestions.js'
import shelterQuestions from './ShelterQuestions.js'
import Quiz from './Quiz'
import SelectSourcePage from './SelectSourcePage'
import Results from './Results'
import Login from './Login'
import Register from './Register'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: ''
    }
  }

  render () {
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <IntroPage {...props} />} />
        <Route path='/source' render={(props) => <SelectSourcePage {...props} />} />
        <Route path='/breeder' render={(props) => <Quiz questions={breederQuestions} {...props} />} />
        <Route path='/shelter' render={(props) => <Quiz questions={shelterQuestions} {...props} />} />
        <Route path='/individual' render={(props) => <Quiz questions={individualQuestions} {...props} />} />
        <Route path='/results' renter={(props) => <Results {...props} />} />
        <Route path='/login' renter={(props) => <Login {...props} />} />
        <Route path='/register' renter={(props) => <Register {...props} />} />
      </div>
    )
  }
}

export default App
