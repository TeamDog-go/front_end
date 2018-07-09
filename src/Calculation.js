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
