import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import {Tooltip} from 'primereact/components/tooltip/Tooltip'
import PQlogo from './Media/PQlogo_rev-02.svg'
import {Dialog} from 'primereact/components/dialog/Dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import request from 'superagent'

import dog1 from './Media/adorable-blur.jpg'
import dog2 from './Media/aussie-puppies.jpg'
import dog3 from './Media/lab-puppies.jpg'
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

  onClickShelterInfo (event) {
    this.setState({sheltervisible: true})
  }

  onClickShelterChoice () {
    request
      .get(`https://polar-castle-14061.herokuapp.com/categories/2`)
      .then((response) => {
        console.log(response)
        return response.body.category.questions.map((entry, index) => {
          return {
            content: entry.content,
            id: entry.id,
            options: response.body.category.options[index].map((entry, index) => {
              return {
                o_content: entry.o_content,
                o_color: entry.o_color,
                points: entry.avail_points,
                question_id: entry.question_id,
                id: entry.id}
            })}
        })
      })
      .then((response) => {
        window.localStorage.spotCheck_shelterQuestions = JSON.stringify(response)
        this.props.history.push('/shelter')
      })
  }

  onClickBreederInfo (event) {
    this.setState({breedervisible: true})
  }

  onClickBreederChoice () {
    request
      .get(`https://polar-castle-14061.herokuapp.com/categories/1`)
      .then((response) => {
        console.log(response)
        return response.body.category.questions.map((entry, index) => {
          return {
            content: entry.content,
            id: entry.id,
            options: response.body.category.options[index].map((entry, index) => {
              return {
                o_content: entry.o_content,
                o_color: entry.o_color,
                points: entry.avail_points,
                question_id: entry.question_id,
                id: entry.id}
            })}
        })
      })
      .then((response) => {
        window.localStorage.spotCheck_breederQuestions = JSON.stringify(response)
        this.props.history.push('/breeder')
      })
  }
  onClickIndividualInfo (event) {
    this.setState({individualvisible: true})
  }
  onClickIndividualChoice () {
    request
      .get(`https://polar-castle-14061.herokuapp.com/categories/3`)
      .then((response) => {
        console.log(response)
        return response.body.category.questions.map((entry, index) => {
          return {
            content: entry.content,
            id: entry.id,
            options: response.body.category.options[index].map((entry, index) => {
              return {
                o_content: entry.o_content,
                o_color: entry.o_color,
                points: entry.avail_points,
                question_id: entry.question_id,
                id: entry.id}
            })}
        })
      })
      .then((response) => {
        window.localStorage.spotCheck_individualQuestions = JSON.stringify(response)
        this.props.history.push('/individual')
      })
  }

  onHide (event) {
    this.setState({
      sheltervisible: false,
      breedervisible: false,
      individualvisible: false})
  }

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
