const individualQuestions = [
  {
    content: 'Will the owner allow you to visit where the puppies/dogs are kept?',
    source_id: 'individual',
    id: 21,
    options: [{
      content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      content: 'No',
      o_color: 'red',
      points: -100
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Where is the dog living?',
    source_id: 'individual',
    id: 22,
    options: [{
      content: 'In the home with the family',
      o_color: 'green',
      points: 10
    }, {
      content: 'In rows of cages/warehouse',
      o_color: 'red',
      points: -30
    }, {
      content: 'In a kennel, garage, or outdoors',
      o_color: 'yellow',
      points: -10
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Do you know this individual?',
    source_id: 'individual',
    id: 23,
    options: [{
      content: 'Yes, I know them personally and trust them',
      o_color: 'green',
      points: 10
    }, {
      content: 'No, they are a friend of a friend or listed their dog on a site like Craigslist ',
      o_color: 'yellow',
      points: -10 // 0 or -10, not sure which
    }]
  },
  {
    content: 'Why is the individual giving this dog/puppy away?',
    source_id: 'individual',
    id: 24,
    options: [{
      content: 'Their own dog had puppies',
      o_color: 'yellow',
      points: 0
    }, {
      content: 'Moving',
      o_color: 'green',
      points: 10
    }, {
      content: 'Behavior problem',
      o_color: 'red',
      points: -30
    }, {
      content: 'Allergies',
      o_color: 'yellow',
      points: -10
    }, {
      content: 'Too much work/too energetic',
      o_color: 'yellow',
      points: -10
    }, {
      content: 'Can’t afford the dog(s) (?)',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Is the individual offering a trial period before the adoption is final? (You can take the dog home for a short time to make sure it’s a good fit.)',
    source_id: 'individual',
    id: 25,
    options: [{
      content: 'Yes',
      o_color: 'green',
      points: 30
    }, {
      content: 'No',
      o_color: 'yellow',
      points: -10
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }, {
    content: 'Has the individual socialized the puppies to people, objects, and a normal home environment?',
    source_id: 'individual',
    id: 26,
    options: [{
      content: 'Yes, and they are raised in the home ',
      o_color: 'green',
      points: 10
    }, {
      content: 'Yes, and they are not raised inside the home ',
      o_color: 'yellow',
      points: -10
    }, {
      content: 'No',
      o_color: 'red',
      points: -30
    }, {
      content: 'I don\'t know',
      o_color: 'yellow', // NEED TO CONSIDER GIVING -SOME- VALUE TO I DONT KNOW //
      points: 0
    }, {
      content: 'Not applicable, adult dog(s)',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Does the individual have vet records for the puppies/dog showing it is up to date on vaccines?',
    source_id: 'individual',
    id: 27,
    options: [{
      content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      content: 'No',
      o_color: 'red',
      points: -30
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Does the dog have any history of behavior problems such as fear, aggression, or separation anxiety?',
    source_id: 'individual',
    id: 28,
    options: [{
      content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      content: 'No',
      o_color: 'red',
      points: -30
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }, {
    content: 'Are any of the following types of phrases used in the dog’s description: “outside dog”, “protective”, “needs a firm hand”, “dominant”, “good guard dog”?',
    source_id: 'individual',
    id: 29,
    options: [{
      content: 'Yes',
      o_color: 'red',
      points: -30
    }, {
      content: 'No',
      o_color: 'green',
      points: 10
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }, {
    content: 'What is the adoption fee for the individual’s dog or puppy?',
    source_id: 'individual',
    id: 30,
    options: [{
      content: 'Over $350',
      o_color: 'green',
      points: 10
    }, {
      content: '$0-350',
      o_color: 'red',
      points: -30
    }, {
      content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  }
]

export default individualQuestions
