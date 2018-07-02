const individualQuestions = [
  {
    content: 'Will the owner allow you to visit where the puppies/dogs are kept?',
    source: 'individual',
    id: 21,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No',
      o_color: 'red',
      points: -100
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Where is the dog living?',
    source: 'individual',
    id: 22,
    options: [{
      o_content: 'In the home with the family',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'In rows of cages/warehouse',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'In a kennel, garage, or outdoors',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Do you know this individual?',
    source: 'individual',
    id: 23,
    options: [{
      o_content: 'Yes, I know them personally and trust them',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No, they are a friend of a friend',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'No, the dog is listed on a site like Craigslist',
      o_color: 'yellow',
      points: -10
    }]
  },
  {
    content: 'Why is the individual giving this dog/puppy away?',
    source: 'individual',
    id: 24,
    options: [{
      o_content: 'Their own dog had puppies',
      o_color: 'yellow',
      points: 0
    }, {
      o_content: 'Moving',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'Behavior problem',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'Allergies',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'Too much work/too energetic',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'Can’t afford the dog',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Is the individual offering a trial period before the adoption is final? (You can take the dog home for a short time to make sure it’s a good fit.)',
    source: 'individual',
    id: 25,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 30
    }, {
      o_content: 'No',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }, {
    content: 'Has the individual socialized the puppies to people, objects, and a normal home environment?',
    source: 'individual',
    id: 26,
    options: [{
      o_content: 'Yes, and they are raised in the home ',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'Yes, and they are not raised inside the home ',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'No',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }, {
      o_content: 'Not applicable, adult dog(s)',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Does the individual have vet records for the puppy/dog showing it is up to date on vaccines?',
    source: 'individual',
    id: 27,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Does the dog have any history of behavior problems such as fear, aggression, or separation anxiety?',
    source: 'individual',
    id: 28,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }, {
    content: 'Are any of the following types of phrases used in the dog’s description: “outside dog”, “protective”, “needs a firm hand”, “dominant”, “good guard dog”?',
    source: 'individual',
    id: 29,
    options: [{
      o_content: 'Yes',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'No',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }, {
    content: 'What is the adoption fee for the individual’s dog or puppy?',
    source: 'individual',
    id: 30,
    options: [{
      o_content: 'Over $350',
      o_color: 'green',
      points: 10
    }, {
      o_content: '$0-350',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }
]

export default individualQuestions
