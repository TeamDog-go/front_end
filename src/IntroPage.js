import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import dogAndChild from './Media/dogAndChild.jpg'
// import pawprint from './Media/pawprint.png'
// import dogHouse from './Media/dogHouse.png'
import PQlogo from './Media/PQlogo.jpg'
// import Link from 'react-router-dom'

class IntroPage extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div>
          <p className='tagline'>Sniff Out a Good Spot!</p>
        </div>
        <div className='introPageDiv'>
          <img className='introPageImage' src={dogAndChild} />
          <ul className='introPageText'>
            <li>You want the best chance at finding a happy, healthy dog.</li>
            <li>Dogs can have <strong>serious behavior and health problems</strong> because of where they come from.</li>
            <li><strong>Telling the good places from the bad can be very tricky!</strong></li>
            <li>Quickly assess breeders, shelters, and individuals with the <strong>PupQuest Test!</strong></li>
          </ul>
        </div>
        <div className='navButtonDiv'>
          {/* <Button className='navButton' onClick='' label='Previous' /> */}
          <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Let&apos;s Go!' />
        </div>
      </div>
    )
  }
}

export default IntroPage
