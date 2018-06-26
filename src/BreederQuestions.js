const breederQuestions = [
  {
    text: 'Are you allowed to visit where the puppies are kept in person?',
    answer: [{
      text: 'Yes',
      value: true,
      score: 100
    },
    {
      text: 'No',
      value: false,
      score: -100
    }, {
      text: 'I don\'t know',
      value: undefined,
      score: 0
    }
    ]
  },
  {
    text: 'Does the breeder ship puppies?',
    answer: [{
      text: 'Yes',
      value: true,
      score: -100
    },
    {
      text: 'No',
      value: false,
      score: 100
    }, {
      text: 'I don\'t know',
      value: undefined,
      score: 0
    }
    ]
  },
  {
    text: 'Is the breeder USDA licensed?',
    answer: [{
      text: 'Yes',
      value: true,
      score: -100
    },
    {
      text: 'No',
      value: false,
      score: 100
    }, {
      text: 'I don\'t know',
      value: undefined,
      score: 0
    }
    ]
  }
]

export default breederQuestions
