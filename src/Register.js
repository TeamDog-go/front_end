import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import {Password} from 'primereact/components/password/Password'
import {InputText} from 'primereact/components/inputtext/InputText'
import PQlogo from './Media/PQlogo_rev-02.svg'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      registername: '',
      registerpass: ''
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
            <Button className='navButton' onClick={this.questionSubmit} label='Register' />
          </div>
        </div>
      </div>
    )
  }
}

export default Register
