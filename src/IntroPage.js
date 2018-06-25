import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'

class IntroPage extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div className='introPageDiv'>
        <header className='header'>
          <h2 className='header'>PupSource</h2>
        </header>
        <p>Paragraph text</p>
        {/* image */}
        <button className='previous' type='submit'>Previous</button>
        <button className='previous' type='submit'>Next</button>
      </div>
    )
  }
}

export default IntroPage
