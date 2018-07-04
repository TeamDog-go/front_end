import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import sourceDog from './Media/adorable-blur.jpg'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import PQlogo from './Media/PQlogo_rev-02.svg'
import {Dialog} from 'primereact/components/dialog/Dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SelectSourcePage extends Component {
  constructor (props) {
    super()
    this.state = {visible: false}
    this.onClick = this.onClick.bind(this)
    this.onHide = this.onHide.bind(this)
  }

  onClick (event) {
    this.setState({visible: true})
  }

  onHide (event) {
    this.setState({visible: false})
  }
  render () {
    return (
      <div className='megaWrapper'>
        <div className='titleDiv'>
          <header>
            <img className='headerImage' src={PQlogo} alt='PupQuest Logo' />
            <h2 className='header'>&nbsp;PupQuest Test</h2>
          </header>
        </div>
        <div className='selectSourcePageDiv'>
          <img className='selectSourcePageImage' src={sourceDog} alt='curious dog' />
          <h3 className='sourceQuestionText'>Which best describes the place you want to test?</h3>
          <div>
            <Button className='sourceButton' id='shelterButton' onClick={() => this.props.history.push('/shelter')} label='Shelter / Rescue' />
            <Dialog header='Info' visible={this.state.visible} width='350px' modal onHide={this.onHide} dismissableMask={this.state.visible} >For organizations that adopt dogs out of a public building or foster homes.</Dialog>
            <div className='moreInfoModal'><FontAwesomeIcon icon='question-circle' onClick={this.onClick} />
            </div>
            <Tooltip tooltipStyleClass='sourceTooltip' for='#shelterButton' title='For groups that have dogs for adoption in a public building or in foster homes.' tooltipPosition='right' />
          </div>
          <div>
            <Button className='sourceButton' id='breederButton' onClick={() => this.props.history.push('/breeder')} label='Breeder' />
            <Dialog header='Info' visible={this.state.visible} width='350px' modal onHide={this.onHide} dismissableMask={this.state.visible} >For professional and hobby breeders.</Dialog>
            <div className='moreInfoModal'><FontAwesomeIcon icon='question-circle' onClick={this.onClick} />
            </div>
            <Tooltip className='sourceTooltip' for='#breederButton' title='For professional and hobby breeders.' tooltipPosition='right' />
          </div>

          <div>
            <Button className='sourceButton' id='individualButton' onClick={() => this.props.history.push('/individual')} label='Individual' />
            <Dialog header='Info' visible={this.state.visible} width='350px' modal onHide={this.onHide} dismissableMask={this.state.visible} >For friends, relatives, neighbors, or Craigslist posters rehoming their dog or litter of puppies.</Dialog>
            <div className='moreInfoModal'><FontAwesomeIcon icon='question-circle' onClick={this.onClick} />
            </div>
            <Tooltip className='sourceTooltip' for='#individualButton' title='For friends, relatives, neighbors, or Craigslist posters rehoming their dog/a litter of puppies.' tooltipPosition='right' />
          </div>
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
