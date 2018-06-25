import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import dogAndChild from './Media/dogAndChild.jpg'
import pawprint from './Media/pawprint.png'

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
          <div className='introPageText'>
            <p><img className='pawprint' src={pawprint} />Many dogs have <strong>behavior and health problems</strong> because of where they came from.</p>
            <p><img className='pawprint' src={pawprint} />These problems can be <strong>emotionally and financially expensive.</strong></p>
            <p><img className='pawprint' src={pawprint} />Lots of people buy or adopt from risky places and <strong>they have no idea!</strong></p>
            <p><img className='pawprint' src={pawprint} /><strong>Use PupSource to help your family find a happy, healthy dog!</strong></p>
          </div>
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
