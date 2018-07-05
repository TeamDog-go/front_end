import React, {Component} from 'react'
import {Button} from 'primereact/components/button/Button'
import {Password} from 'primereact/components/password/Password'
import {InputText} from 'primereact/components/inputtext/InputText'
import PQlogo from './Media/PQlogo_rev-02.svg'
import request from 'superagent'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false
    }
    this.loginSubmit = this.loginSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginSubmit () {
    const body = {
      username: this.state.username,
      password: this.state.password
    }
    request
      .post('https://polar-castle-14061.herokuapp.com/sessions.json')
      .send(body)
      .then(response => {
        console.log(response)
        const userid = response.body.id
        window.localStorage.pupQuestUserId = userid
      })
      .catch(error => {
        this.setState({error: true})
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

          <div className='login-div'>
            <h2>Login</h2>
            <form>
              <span className='ui-float-label'>
                <InputText id='float-input' className='portal-input' name='username' type='text' value={this.state.username} onChange={(e) => this.handleOptionChange(e)} />
                <label className='portal-label' htmlFor='float-input'>Username</label>
              </span>
              <span className='ui-float-label'>
                <Password feedback={false} className='portal-input' name='password' value={this.state.password} onChange={(e) => this.handleOptionChange(e)} />
                <label className='portal-label' htmlFor='float-input'>Password</label>
                {this.state.error }
              </span>
            </form>
            {this.state.error && <div className='error'>{this.state.error}</div>}
            <Button className='navButton login' onClick={this.questionSubmit} label='Login' />
          </div>

        </div>
        <div className='navButtonDiv portal'>
          <Button className='navButton' onClick={() => this.props.history.push('/register')} label='Registration' />
        </div>
      </div>
    )
  }
}

export default Login
