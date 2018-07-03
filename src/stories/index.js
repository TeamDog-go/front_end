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
import Feedback from '../Feedback'
import Source from '../SelectSourcePage'
const answers = [{}]

// const props = {history: 'history'}
const match = {path: '/breeder'}
addDecorator(story => (<Router>{story()}</Router>))

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('App', module)
  .add('minimal App page', () => <App />)

storiesOf('Questions, Basic', module)
  .add('Skeleton of Basic Question', () => <BasicQ question={breederQuestions[0]} addAnswer={this.addAnswer} />)

storiesOf('Quiz', module)
  .add('Quiz page, using Breeder quiz', () => <Quiz questions={breederQuestions} />)

storiesOf('Results', module)
  .add('Quiz page, using Breeder quiz, green', () => <Results questions={breederQuestions} answers={answers} feedbackStart={2} match={match} />)

storiesOf('Login', module)
  .add('Login page', () => <Login />)

storiesOf('Feedback', module)
  .add('Feedback page', () => <Feedback />)

storiesOf('Source', module)
  .add('Source page', () => <Source />)
