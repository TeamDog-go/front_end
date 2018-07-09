function calculateScore (answerArray) {
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

export {calculateScore}

function makeSourceQuestions (questions, options) {
  // return response.body.category.questions.map((entry, index) => {
  return questions.map((entry, index) => {
    return {
      content: entry.content,
      id: entry.id,
      // options: response.body.category.options[index].map((entry, index) => {
      options: options[index].map((entry, index) => {
        return {
          o_content: entry.o_content,
          o_color: entry.o_color,
          points: entry.avail_points,
          question_id: entry.question_id,
          id: entry.id}
      })
    }
  })
}
export {makeSourceQuestions}
