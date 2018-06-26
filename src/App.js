import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import IntroPage from './IntroPage'
import 'primereact/resources/themes/pepper-grinder/theme.css'
import 'primereact/resources/primereact.min.css'
import './App.css'
import breederQuestions from './BreederQuestions'
import Quiz from './Quiz'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: 'breeder'
    }
  }

  render () {
    if (this.state.source === 'breeder') {
      return (
        <div className='App'>
          <Route path='/' render={(props) => <Quiz questions={breederQuestions} />} />
        </div>
      )
    } else { return null }
  }
}

export default App
