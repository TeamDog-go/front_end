function calculation (answerArray) {
  const scores = answerArray.map(function (e) { return Number(e.score) })
  const total = scores.reduce((total, amount) => total + amount)
  let colorResult
  if (total < 0) {
    colorResult = 'red'
  } else if (total > 1 && total < 69) {
    colorResult = 'yellow'
  } else { colorResult = 'green' }
  return {score: total,
    color: colorResult}
}

export {calculation}

function results (answers, questions, surveyID) {
  const questionArray = []
  questions.map((entry, index) => {
    questionArray.push({
      question_id: index,
      content: entry.text
    })
  })
  const answerArray = []
  answers.map((entry, index) => {
    let value
    if (entry.value === 'undefined') {
      value = undefined
      // value = null
    } else if (entry.value === 'false' || entry.value === true) {
      value = Boolean(entry.value)
    } else {
      value = entry.value
    }
    answerArray.push({
      question_id: index,
      value: value,
      a_content: entry.answer
    })
  })
  return {
    questions: questionArray,
    answers: answerArray
  }
}
export {results}
