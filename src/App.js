import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import IntroPage from './IntroPage'
import 'primereact/resources/themes/pepper-grinder/theme.css'
import 'primereact/resources/primereact.min.css'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      login: false
    }
  }
  render () {
    return (
      <IntroPage />
    )
  }
}

export default App
