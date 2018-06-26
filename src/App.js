import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import IntroPage from './IntroPage'
import 'primereact/resources/themes/pepper-grinder/theme.css'
import 'primereact/resources/primereact.min.css'
import './App.css'
import breederQuestions from './BreederQuestions'
import Quiz from './Quiz'
import SelectSourcePage from './SelectSourcePage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: ''
    }
  }

// Use individual routes for each source instead of putting in state /:sourcename 
// All routes in one place in App
// Keep App smallllll

  render () {
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <IntroPage {...props} />} />
        <Route path='/source' render={(props) => <SelectSourcePage {...props} />} />
        <Route path='/breeder' render={(props) => <Quiz questions={breederQuestions} {...props} />} />
        {/* <Route path='/shelter' render={(props) => <Quiz questions={shelterQuestions} {...props} />} /> */}
        {/* <Route path='/individual' render={(props) => <Quiz questions={individualQuestions} {...props} />} /> */}
      </div>
    )
  }
}

export default App
