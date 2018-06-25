import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import dogAndChild from './Media/dogAndChild.jpg'

class IntroPage extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div>
        <div className='introPageDiv'>
          <header>
            <h2 className='header'>PupSource</h2>
          </header>
          <p className='tagline'>Find a Happy, Healthy Dog</p>
          <img className='introPageImage' src={dogAndChild} />
          <ul className='introPageText'>
            <li>Many dogs have behavior and health problems because of where they came from.</li>
            <li>These problems can be emotionally and financially expensive.</li>
            <li>Lots of people buy or adopt from puppy farms and disreputable rescues, and they have no idea!</li>
            <li>We can help you evaluate the quality of breeders, shelters, and more with just a few questions!</li>
          </ul>
        </div>
        <div className='navButtonDiv'>
          <Button className='navButton' onClick='' label='Previous' />
          <Button className='navButton' onClick='' label='Next' />
        </div>
      </div>
    )
  }
}

export default IntroPage
