import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import PQlogo from './Media/PQlogo_rev-02.svg'

import dog1 from './Media/adorable-blur.jpg'
import dog2 from './Media/aussie-puppies.jpg'
import dog3 from './Media/lab-puppies.jpg'
import dog4 from './Media/puppy-basket.jpg'

class SelectSourcePage extends Component {
  // constructor () {
  //   this.getRandomPhoto = this.getRandomPhoto.bind(this)
  // }
  getRandomPhoto () {
    const photoArray = [dog1, dog2, dog3, dog4]
    const photoindex = Math.floor(Math.random() * Math.floor(photoArray.length))
    // return photoArray[photoindex]
    const photoSource = photoArray[photoindex]
    return (<img className='selectSourcePageImage' src={photoSource} alt='adorable dogs' />)
  }

  render () {
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;Spot Check</h2>
          </header>
        </div>
        <div className='selectSourcePageDiv'>
          {this.getRandomPhoto()}
          <h3 className='sourceQuestionText'>Which best describes the place you want to test?</h3>
          <Button className='sourceButton' id='shelterButton' onClick={() => this.props.history.push('/shelter')} label='Shelter / Rescue' />
          <Tooltip tooltipStyleClass='sourceTooltip' for='#shelterButton' title='For groups that have dogs for adoption in a public building or in foster homes.' tooltipPosition='right' />
          <Button className='sourceButton' id='breederButton' onClick={() => this.props.history.push('/breeder')} label='Breeder' />
          <Tooltip className='sourceTooltip' for='#breederButton' title='For professional and hobby breeders.' tooltipPosition='right' />
          <Button className='sourceButton' id='individualButton' onClick={() => this.props.history.push('/individual')} label='Individual' />
          <Tooltip className='sourceTooltip' for='#individualButton' title='For friends, relatives, neighbors, or Craigslist posters rehoming their dog/a litter of puppies.' tooltipPosition='right' />
        </div>
        <div className='navButtonDiv'>
          <button className='arrow back active' onClick={() => this.props.history.push('/')} />
          <button className='arrow' disabled />
        </div>
      </div>
    )
  }
}

export default SelectSourcePage
