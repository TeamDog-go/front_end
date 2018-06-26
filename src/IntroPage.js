import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import dogAndChild from './Media/dogAndChild.jpg'
import pawprint from './Media/pawprint.png'
import dogHouse from './Media/dogHouse.png'

class IntroPage extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={dogHouse} />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div>
          <p className='tagline'>Sniff Out a Good Spot!</p>
        </div>
        <div className='introPageDiv'>
          <img className='introPageImage' src={dogAndChild} />
          <ul className='introPageText'>
            <li>Many dogs have <strong>behavior and health problems</strong> because of where they came from.</li>
            <li>These problems can be <strong>emotionally and financially expensive.</strong></li>
            <li>Lots of people buy or adopt from risky places and <strong>they have no idea!</strong></li>
            <li><strong>Use PupSource to help your family find a happy, healthy dog!</strong></li>
          </ul>
        </div>
        <div className='navButtonDiv'>
          <Button className='navButton' onClick='' label='Previous' />
          <Button className='navButton' onClick='' label='Let&apos;s Go!' />
        </div>
      </div>
    )
  }
}

export default IntroPage
