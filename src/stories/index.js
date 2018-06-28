import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import { MemoryRouter as Router } from 'react-router-dom'

import BasicQ from '../BasicQ'
import App from '../App'
import Quiz from '../Quiz'
import Results from '../Results'
import Login from '../Login'

import breederQuestions from '../BreederQuestions'
const answers = [
  {answer: 'Yes',
    score: '50',
    value: 'true'},
  {answer: 'No',
    score: '-100',
    value: 'false'},
  {answer: "I don't know",
    score: '0',
    value: 'undefined'}]

addDecorator(story => (<Router>{story()}</Router>))

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('App', module)
  .add('minimal App page', () => <App />)

storiesOf('Questions, Basic', module)
  .add('Skeleton of Basic Question', () => <BasicQ question={breederQuestions[0]} addAnswer={this.addAnswer} />)

storiesOf('Quiz', module)
  .add('Quiz page, using Breeder quiz', () => <Quiz questions={breederQuestions} />)

storiesOf('Results', module)
  .add('Quiz page, using Breeder quiz', () => <Results questions={breederQuestions} answers={answers} feedbackStart={2} />)

storiesOf('Login', module)
  .add('Login page', () => <Login />)
