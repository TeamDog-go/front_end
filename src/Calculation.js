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

function results (answerArray, questions) {
  const questionText = questions.map((e) => { return e.text })
  const userAnswers = answerArray.map((entry, index) => {
    let value
    if (entry.value === 'undefined') {
      value = undefined
    } else if (entry.value === 'false' || entry.value === true) {
      value = Boolean(entry.value)
    } else {
      value = entry.value
    }
    return ({
      id: index,
      content: questionText[index],
      answer: {
        answer_id: 1,
        question_id: index,
        value: value,
        content: entry.answer
      }

    })
  })
  const final = userAnswers.concat(calculation(answerArray))
  return final
}
export {results}
