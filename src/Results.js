import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import goldenRetriever from './Media/goldenRetriever.jpg'
// import pawprint from './Media/pawprint.png'
// import dogHouse from './Media/dogHouse.png'
// import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import PQlogo from './Media/PQlogo.jpg'

class Results extends Component {
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
        <div className='resultsPageDiv'>
          {/* <img className='selectSourcePageImage' src={goldenRetriever} /> */}
          <h4 className='resultsText'>This sourceName ranked...</h4>
        </div>
        <div className='navButtonDiv'>
          <Button className='navButton' onClick='' label='Learn more on Pupquest' />
          <Button className='navButton' onClick={() => this.props.history.push('/source')} label='Test another place' />
        </div>
      </div>
    )
  }
}

export default Results
