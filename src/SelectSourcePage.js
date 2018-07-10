import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import {Dialog} from 'primereact/components/dialog/Dialog'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {makeSourceQuestions} from './Calculation'
import request from 'superagent'
import moment from 'moment'
import PropTypes from 'prop-types'

import PQlogo from './Media/PQlogo_rev-02.svg'
import dog1 from './Media/adorable-blur.jpg'
import dog2 from './Media/aussie-puppies.jpg'
import dog4 from './Media/puppy-basket.jpg'

class SelectSourcePage extends Component {
  constructor (props) {
    super()
    this.state = {
      visible: false,
      sheltervisible: false,
      breedervisible: false,
      individualvisible: false,
      showHeader: false}
    this.onClickShelterInfo = this.onClickShelterInfo.bind(this)
    this.onClickShelterChoice = this.onClickShelterChoice.bind(this)
    this.onClickBreederInfo = this.onClickBreederInfo.bind(this)
    this.onClickBreederChoice = this.onClickBreederChoice.bind(this)
    this.onClickIndividualInfo = this.onClickIndividualInfo.bind(this)
    this.onClickIndividualChoice = this.onClickIndividualChoice.bind(this)
    this.onHide = this.onHide.bind(this)
  }

  compareUpdate (id, localCopy) {
    return (
      request
        .get(`https://polar-castle-14061.herokuapp.com/timestamps/${id}`)
        .then((response) => { return response.body.category.updated_at })
        .then((updated) => {
          if (localCopy) {
            return moment(localCopy) < moment(updated)
          } else return true
        })
    )
  }

  onClickShelterInfo (event) {
    this.setState({sheltervisible: true})
  }

  onClickShelterChoice () {
    this.compareUpdate(2, window.localStorage.spotCheck_shelterQuestions_updated)
      .then((newer) => {
        if (!window.localStorage.spotCheck_shelterQuestions || newer) {
          // console.log('Shelter Qs Updated', newer)
          request
            .get(`https://polar-castle-14061.herokuapp.com/categories/2`)
            .then((response) => {
              window.localStorage.spotCheck_shelterQuestions_updated = response.body.category.last_updated
              return makeSourceQuestions(response.body.category.questions, response.body.category.options)
            })
            .then((response) => {
              window.localStorage.spotCheck_shelterQuestions = JSON.stringify(response)
              this.props.updateSource(2, response)
            })
        } else { console.log('ShelterQ Not Updated, Local Version is Current') }
      })
    this.props.history.push('/shelter')
  }

  onClickBreederInfo (event) {
    this.setState({breedervisible: true})
  }

  onClickBreederChoice () {
    this.compareUpdate(1, window.localStorage.spotCheck_breederQuestions_updated)
      .then((newer) => {
        if (!window.localStorage.spotCheck_breederQuestions || newer) {
          // console.log('Breeder Qs Updated', newer)
          request
            .get(`https://polar-castle-14061.herokuapp.com/categories/1`)
            .then((response) => {
              window.localStorage.spotCheck_breederQuestions_updated = response.body.category.last_updated
              return makeSourceQuestions(response.body.category.questions, response.body.category.options)
            })
            .then((response) => {
              window.localStorage.spotCheck_breederQuestions = JSON.stringify(response)
              this.props.updateSource(1, response)
            })
        } else { console.log('BreederQs Not Updated, Local Version is Current') }
      })
    this.props.history.push('/breeder')
  }

  onClickIndividualInfo (event) {
    this.setState({individualvisible: true})
  }
  onClickIndividualChoice () {
    this.compareUpdate(3, window.localStorage.spotCheck_individualQuestions_updated)
      .then((newer) => {
        if (!window.localStorage.spotCheck_individualQuestions || newer) {
          // console.log('Individual Qs Updated', newer)
          request
            .get(`https://polar-castle-14061.herokuapp.com/categories/3`)
            .then((response) => {
              window.localStorage.spotCheck_individualQuestions_updated = response.body.category.last_updated
              return makeSourceQuestions(response.body.category.questions, response.body.category.options)
            })
            .then((response) => {
              window.localStorage.spotCheck_individualQuestions = JSON.stringify(response)
              this.props.updateSource(3, response)
            })
        } else { console.log('IndividualQs Not Updated, Local Version is Current') }
      })
    this.props.history.push('/individual')
  }

  onHide (event) {
    this.setState({
      sheltervisible: false,
      breedervisible: false,
      individualvisible: false})
  }

  getRandomPhoto () {
    const photoArray = [dog1, dog2, dog4]
    const photoindex = Math.floor(Math.random() * Math.floor(photoArray.length))
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
          <div className='selectSourcePageImageWrapper'>
            {this.getRandomPhoto()}
          </div>
          <h3 className='sourceQuestionText'>Which best describes the place you want to check?</h3>
          <div>
            <Button className='sourceButton' id='shelterButton' onClick={this.onClickShelterChoice} label='Shelter / Rescue' />
            <Dialog className='dialogInfo' showHeader={this.state.showHeader} visible={this.state.sheltervisible} width='350px' modal onHide={this.onHide} dismissableMask={this.state.sheltervisible} >For groups that have dogs for adoption in a public building or in foster homes.</Dialog>
            <div className='moreInfoModal' id='shelterModal'><FontAwesomeIcon icon='question-circle' onClick={this.onClickShelterInfo} />
            </div>
            <Tooltip tooltipStyleClass='sourceTooltip' for='#shelterModal' title='For groups that have dogs for adoption in a public building or in foster homes.' tooltipPosition='right' />
          </div>
          <div>
            <Button className='sourceButton' id='breederButton' onClick={this.onClickBreederChoice} label='Breeder' />
            <Dialog className='dialogInfo' showHeader={this.state.showHeader} visible={this.state.breedervisible} width='350px' modal onHide={this.onHide} dismissableMask={this.state.breedervisible} >For professional and hobby breeders.</Dialog>
            <div className='moreInfoModal' id='breederModal'><FontAwesomeIcon icon='question-circle' onClick={this.onClickBreederInfo} />
            </div>
            <Tooltip className='sourceTooltip' for='#breederModal' title='For professional and hobby breeders.' tooltipPosition='right' />
          </div>

          <div>
            <Button className='sourceButton' id='individualButton' onClick={this.onClickIndividualChoice} label='Individual' />
            <Dialog className='dialogInfo' showHeader={this.state.showHeader} visible={this.state.individualvisible} width='350px' modal onHide={this.onHide} dismissableMask={this.state.individualvisible} >For friends, relatives, neighbors, or Craigslist posters rehoming their dog/litter of puppies.</Dialog>
            <div className='moreInfoModal' id='individualModal'><FontAwesomeIcon icon='question-circle' onClick={this.onClickIndividualInfo} />
            </div>
            <Tooltip className='sourceTooltip' for='#individualModal' title='For friends, relatives, neighbors, or Craigslist posters rehoming their dog/litter of puppies.' tooltipPosition='right' />
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

SelectSourcePage.propTypes = {
  updateSource: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
