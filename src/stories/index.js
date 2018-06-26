import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import { MemoryRouter as Router } from 'react-router-dom'

import BasicQ from '../BasicQ'
import App from '../App'
import Quiz from '../Quiz'

import breederQuestions from '../BreederQuestions'

addDecorator(story => (<Router>{story()}</Router>))

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('App', module)
  .add('minimal App page', () => <App />)

storiesOf('Questions, Basic', module)
  .add('Skeleton of Basic Question', () => <BasicQ question={breederQuestions[0]} addAnswer={this.addAnswer} />)

storiesOf('Quiz', module)
  .add('Quiz page, using Breeder quiz', () => <Quiz questions={breederQuestions} />)
