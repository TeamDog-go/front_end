import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import boyAndDog from './Media/boyAndDog.jpg'
import PQlogo from './Media/PQlogo_rev-02.svg'
// import Link from 'react-router-dom'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'

class IntroPage extends Component {
  render () {
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div className='taglineDiv'>
          {/* <p className='tagline'>Sniff Out a Good Spot!</p> */}
          {/* <p className='tagline'>Helping you find a happy, healthy puppy!</p> */}
          <p className='tagline'>Because <em>where</em> your pup comes from matters!</p>

        </div>
        <div className='introPageDiv'>
          <img className='introPageImage' src={boyAndDog} alt='dog and girl' />
          <ul className='introPageText'>
            <li><strong>Happy, healthy dogs</strong> come from quality shelters, breeders, and individuals.</li>
            {/* <li>Where are you going to get your next dog?</li> */}
            <li><strong>Serious behavior and health problems</strong> are more likely if you get your dog from a bad source.</li>
            {/* <li><strong>Knowing the good from the bad</strong> can be very tricky!</li> */}
            <li><strong>Quickly assess</strong> breeders, shelters, and individuals with the <strong>PupQuest Test!</strong></li>
          </ul>
        </div>
        <div className='navButtonDivIntro'>
          {/* <Button className='navButton' onClick='' label='Previous' /> */}
          <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Let&apos;s Go!' />
          {/* <p className='registerToSaveText'>Want to save all your results? Sign In or Register!</p> */}
          <Button className='navButton' id='loginButton' onClick={() => this.props.history.push('/login')} label='Login/Register' />
          <Tooltip tooltipStyleClass='sourceTooltip' for='#loginButton' title='Register or log in to keep a personalized record of your PupQuest Test results' tooltipPosition='top' />
        </div>
      </div>
    )
  }
}

export default IntroPage
