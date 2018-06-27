const breederQuestions = [
  {
    text: 'Are you allowed to visit where the puppies are kept in person?',
    answer: [{
      text: 'Yes',
      value: true,
      score: 50
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
      score: 10
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
      score: 10
    }, {
      text: 'I don\'t know',
      value: undefined,
      score: 0
    }
    ]
  }
  // }, // BREAK HERE //
  // {
  //   text: 'Are you able (and willing) to visit the dogs in person?',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: 50
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: -100
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined,
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Where are the puppies being raised?',
  //   answer: [{
  //     text: 'In the home with the family',
  //     value: true,
  //     score: 50
  //   }, {
  //     text: 'In rows of cages/warehouse',
  //     value: false,
  //     score: -100
  //   }, {
  //     text: 'In a kennel, garage, or outdoors',
  //     value: undefined, // NEED A BETTER VALUE HERE//
  //     score: 10
  //   }, {
  //     text: 'Not applicable, adult dog',
  //     value: undefined,
  //     score: 0
  //   }, {
  //     text: 'Other',
  //     value: undefined,
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Are the dogs/puppies seen by a veterinarian prior to going home?',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: 30
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: 5
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined,
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Will the breeder take their dog/puppy back at any point in their lives?',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: 30
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: 10
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined,
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Does the breeder require you to meet them in person?',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: 30
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: -100
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined,
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Does the breeder sell puppies directly over the internet? (You can adopt online and they ship you the animal.)',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: -100
  //   }, {
  //     text: 'No, and they explicitly state this',
  //     value: false,
  //     score: 20
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined,
  //     score: 0
  //   }
  //   ]
  // },
  // {
  //   text: 'How many breeds does the breeder have available?',
  //   answer: [{
  //     text: '1-2',
  //     value: true, // True and False values here? //
  //     score: -100
  //   }, {
  //     text: '3',
  //     value: false,
  //     score: 20
  //   }, {
  //     text: '4 or more',
  //     value: false,
  //     score: -100
  //   }
  //   ]
  // },
  // {
  //   text: 'Does the breeder socialize their puppies to people, objects, and a normal home environment?',
  //   answer: [{
  //     text: 'Yes, and they are raised in the home ',
  //     value: true,
  //     score: 30
  //   }, {
  //     text: 'Yes, and they are not raised inside the home ',
  //     value: true,
  //     score: 10
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: -30
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined, // NEED TO CONSIDER GIVING -SOME- VALUE TO I DONT KNOW //
  //     score: 0
  //   }, {
  //     text: 'Not applicable, adult dog(s)', // NA HERE? //
  //     value: undefined,
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Is the breeder involved with local breed clubs and competitions such as agility, herding, or showing? (AKC membership does not count towards this)',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: 30
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: 10
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined, // also false? //
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'Do the breeders provide proof that parents are screened for health problems (hip dysplasia, heart problems)?',
  //   answer: [{
  //     text: 'Yes',
  //     value: true,
  //     score: 30
  //   }, {
  //     text: 'No',
  //     value: false,
  //     score: 10
  //   }, {
  //     text: 'I don\'t know',
  //     value: undefined, // also false? //
  //     score: 0
  //   }]
  // },
  // {
  //   text: 'How much do puppies cost?',
  //   answer: [{
  //     text: 'Up to $2000',
  //     value: true,
  //     score: 20
  //   }, {
  //     text: 'Between $2000 and $3000 ',
  //     value: false,
  //     score: 5
  //   }, {
  //     text: 'Over $3000',
  //     value: undefined,
  //     score: -20
  //   }]
  // }
]

export default breederQuestions
