import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import goldenRetriever from './Media/goldenRetriever.jpg'
// import pawprint from './Media/pawprint.png'
// import dogHouse from './Media/dogHouse.png'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import PQlogo from './Media/PQlogo.jpg'

class SelectSourcePage extends Component {
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
        <div className='selectSourcePageDiv'>
          <img className='selectSourcePageImage' src={goldenRetriever} />
          <h3 className='sourceQuestionText'>Which best describes the place you want to test?</h3>
          <Button className='sourceButton' id='shelterButton' onClick={() => this.props.history.push('/shelter')} label='Shelter / Rescue' />
          <Tooltip className='sourceTooltip' for='#shelterButton' title='For groups that have dogs for adoption in a public building or in foster homes.' tooltipPosition='right' />
          <Button className='sourceButton' id='breederButton' onClick={() => this.props.history.push('/breeder')} label='Breeder' />
          <Tooltip className='sourceTooltip' for='#breederButton' title='For professional and hobby breeders.' tooltipPosition='right' />
          <Button className='sourceButton' id='individualButton' onClick={() => this.props.history.push('/individual')} label='Individual' />
          <Tooltip className='sourceTooltip' for='#individualButton' title='For friends, relatives, neighbors, or Craigslist posters rehoming their dog/a litter of puppies.' tooltipPosition='right' />
        </div>
        <div className='navButtonDiv'>
          {/* <Button className='navButton' onClick='' label='Previous' /> */}
          {/* <Button className='navButton' onClick='' label='Let&apos;s Go!' /> */}
        </div>
      </div>
    )
  }
}

export default SelectSourcePage
