import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import sourceDog from './Media/adorable-blur.jpg'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import PQlogo from './Media/PQlogo_rev-02.svg'
import {Dialog} from 'primereact/components/dialog/Dialog'

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
          <Button className='sourceButton' id='shelterButton' onClick={() => this.props.history.push('/shelter')} label='Shelter / Rescue' />
          <Dialog header='Info' visible={this.state.visible} width='350px' modal onHide={this.onHide}>For groups that have dogs for adoption in a public building or in foster homes.</Dialog>
          <Button label='?' onClick={this.onClick} />

          <Button label='Show' icon='pi pi-info-circle' onClick={this.onClick} />
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
