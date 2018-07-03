componentDidMount () {
  console.log(this.props.answers)
  console.log(this.props.questions)
  const answers = this.props.answers
  const questions = this.props.questions
  this.resolveCalculation().then((response) => {
    console.log(response.score)
    console.log(response.color)
    this.setState({
      score: response.score,
      color: response.color,
      // initial_feeling: this.props.feedbackStart, SEND FROM PROPS WHEN NEEDED
      final_feedback: response.final_feedback
    })
  })
  console.log(this.state.userid, questions, answers)
  const questionsAttributesData = this.props.questions.map((entry, index) => {
    return (
      {content: entry.content,
        source: entry.source,
        answers_attributes: [{
          a_content: this.props.answers[index].answer,
          a_color: this.props.answers[index].color,
          a_points: this.props.answers[index].points
        }]
      }

    )
  })
  console.log({survey: { user_id: window.localStorage.pupQuestUser ? window.localStorage.pupQuestUser : 4,
    result_attributes: {final_score: this.state.score, color: this.state.color, initial_feeling: this.props.feedbackStart},
    questions_attributes: questionsAttributesData }})
  if (this.state.score && this.state.color) {
    request
      .post(`https://polar-castle-14061.herokuapp.com/surveys.json`)
      .send({survey: { user_id: window.localStorage.pupQuestUser ? window.localStorage.pupQuestUser : 4,
        result_attributes: {final_score: this.state.score, color: this.state.color, initial_feeling: this.props.feedbackStart},
        questions_attributes: questionsAttributesData }})
      // .send({user_id: this.state.userid})
      .then((response) => {
        console.log(response.body.survey.id)
        window.localStorage.surveyid = response.body.survey.id
        request
          .put(`https://polar-castle-14061.herokuapp.com/results.json`)
          .send({ surveyid: window.localStorage.surveyid, final_score: this.state.score, initial_feeling: this.props.feedbackStart, color: this.state.color })
          .then((response) => {
            window.localStorage.responseId = response.body.response.id
          })
      })
  }
}