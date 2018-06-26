import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import goldenRetriever from './Media/goldenRetriever.jpg'
// import pawprint from './Media/pawprint.png'
import dogHouse from './Media/dogHouse.png'

class SelectSourcePage extends Component {
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
        <div className='selectSourcePageDiv'>
          <img className='selectSourcePageImage' src={goldenRetriever} />
        </div>
        <div className='navButtonDiv'>
          <Button className='navButton' onClick='' label='Previous' />
          <Button className='navButton' onClick='' label='Let&apos;s Go!' />
        </div>
      </div>
    )
  }
}

export default SelectSourcePage
