function calculation (answerArray) {
  const points = answerArray.map(function (e) { return Number(e.points) })
  const total = points.reduce((total, amount) => total + amount)
  let colorResult
  if (total <= 50) {
    colorResult = 'red'
  } else if (total > 50 && total <= 79) {
    colorResult = 'yellow'
  } else { colorResult = 'green' }
  return {score: total,
    color: colorResult}
}

export {calculation}

function results (answers, questions) {
  // add survey ID ?
  const questionArray = []
  questions.map((entry) => {
    questionArray.push({
      question_id: entry.id,
      content: entry.content,
      source_id: entry.source_id
    })
    return entry
  })
  const answerArray = []
  answers.map((entry) => {
    answerArray.push({
      a_content: entry.answer,
      question_id: entry.question_id,
      a_color: entry.color,
      points: entry.points
    })
    return entry
  })
  return {
    questions: questionArray,
    answers: answerArray
  }
}
export {results}
