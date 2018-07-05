import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import {Password} from 'primereact/components/password/Password'
import {InputText} from 'primereact/components/inputtext/InputText'
import PQlogo from './Media/PQlogo_rev-02.svg'
import request from 'superagent'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      registername: '',
      registerpass: '',
      error: ''
    }
    this.registerSubmit = this.registerSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  registerSubmit () {
    const body = {
      username: this.state.registername,
      password: this.state.registerpass
    }
    request
      .post('https://polar-castle-14061.herokuapp.com/users.json')
      .send(body)
      .then(response => {
        const userid = response.body.id
        window.localStorage.pupQuestUserId = userid
      })
      .catch(error => {
        this.setState({error: error})
        console.log(error)
      })
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
        <div className='navButtonDiv back'>
          <button className='arrow back active' onClick={() => this.props.history.push('/')} />
        </div>
        <div className='user-portal'>
          <div className='register-div'>
            <h2>Registration</h2>
            <form>
              <span className='ui-float-label'>
                <InputText id='float-input' className='portal-input' name='registername' type='text' value={this.state.registername} onChange={(e) => this.handleOptionChange(e)} />
                <label className='portal-label' htmlFor='float-input'>Username</label>
              </span>
              <span className='ui-float-label'>
                <Password feedback={false} className='portal-input' name='registerpass' value={this.state.registerpass} onChange={(e) => this.handleOptionChange(e)} />
                <label className='portal-label' htmlFor='float-input'>Password</label>
              </span>
            </form>
            {this.state.error && <div className='error'>{this.state.error}</div>}
            <Button className='navButton register' onClick={this.registerSubmit} label='Register' />
          </div>

        </div>
        <div className='navButtonDiv portal'>
          <Button className='navButton' onClick={() => this.props.history.push('/login')} label='Login' />
        </div>
      </div>
    )
  }
}

export default Register
