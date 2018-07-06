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
import breederQuestions from '../BreederQuestions'
import Feeling from '../Feeling'
import Source from '../SelectSourcePage'

const yellowAnswers = [{answer: 'Yes', points: '10', color: 'green', question_id: 1},
  {answer: 'Yes', points: '-30', color: 'red', question_id: 2}, {answer: 'No', points: '10', color: 'green', question_id: 3}, {answer: 'In the home with the family', points: '10', color: 'green', question_id: 4},
  {answer: 'Yes', points: '10', color: 'green', question_id: 5}, {answer: 'Yes', points: '10', color: 'green', question_id: 6}, {answer: 'Yes', points: '10', color: 'green', question_id: 7}, {answer: '1-2', points: '10', color: 'green', question_id: 8},
  {answer: 'Yes', points: '10', color: 'green', question_id: 9}, {answer: 'Up to $2000', points: '10', color: 'green', question_id: 10}]

const greenAnswers = [{answer: 'Yes', points: '10', color: 'green', question_id: 1}, {answer: 'No', points: '10', color: 'green', question_id: 2}, {answer: 'No', points: '10', color: 'green', question_id: 3},
  {answer: 'In the home with the family', points: '10', color: 'green', question_id: 4}, {answer: 'Yes', points: '10', color: 'green', question_id: 5}, {answer: 'Yes', points: '10', color: 'green', question_id: 6}, {answer: 'Yes', points: '10', color: 'green', question_id: 7},
  {answer: '1-2', points: '10', color: 'green', question_id: 8}, {answer: 'Yes', points: '10', color: 'green', question_id: 9}, {answer: 'Up to $2000', points: '10', color: 'green', question_id: 10}]

const redAnswers = [{answer: 'No', points: '-100', color: 'red', question_id: 1}, {answer: 'Yes', points: '-30', color: 'red', question_id: 2}, {answer: 'Yes', points: '-100', color: 'red', question_id: 3}, {answer: 'In rows of cages or a warehouse', points: '-30', color: 'red', question_id: 4}, {answer: 'No', points: '-30', color: 'red', question_id: 5}, {answer: 'No', points: '-30', color: 'red', question_id: 6}, {answer: 'No', points: '-100', color: 'red', question_id: 7}, {answer: '4 or more', points: '-100', color: 'red', question_id: 8}, {answer: "I don't know", points: '-10', color: 'yellow', question_id: 9}, {answer: 'Over $3000', points: '-30', color: 'red', question_id: 10}]
// const props = {history: 'history'}
const match = {path: '/breeder'}
addDecorator(story => (<Router>{story()}</Router>))

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('App', module)
  .add('Skeleton App', () => <App />)

storiesOf('Questions, Basic', module)
  .add('Skeleton of Basic Question', () => <BasicQ question={breederQuestions[0]} addAnswer={this.addAnswer} />)

storiesOf('Quiz', module)
  .add('Breeder Quiz', () => <Quiz questions={breederQuestions} />)

storiesOf('Results', module)
  .add('Breeder- yellow', () => <Results questions={breederQuestions} answers={yellowAnswers} initial_feeling={2} match={match} />)
  .add('Breeder- green', () => <Results questions={breederQuestions} answers={greenAnswers} initial_feeling={2} match={match} />)
  .add('Breeder- red', () => <Results questions={breederQuestions} answers={redAnswers} initial_feeling={2} match={match} />)

storiesOf('Feeling', module)
  .add('Feeling page', () => <Feeling />)

storiesOf('Source', module)
  .add('Source page', () => <Source />)
