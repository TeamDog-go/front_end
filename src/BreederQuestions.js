const breederQuestions = [
  {
    content: 'Are you allowed to visit where the puppies are kept in person?',
    source_id: 'breeder',
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 50
    },
    {
      o_content: 'No',
      o_color: 'red',
      points: -100
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }
    ]
  },
  {
    content: 'Does the breeder ship puppies?',
    source_id: 'breeder',
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: -100
    },
    {
      o_content: 'No',
      o_color: 'red',
      points: 10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }
    ]
  },
  {
    content: 'Is the breeder USDA licensed?',
    source_id: 'breeder',
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: -100
    },
    {
      o_content: 'No',
      o_color: 'red',
      points: 10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }
    ]
  }
  // }, // BREAK HERE //
  // {
  //   content: 'Are you able (and willing) to visit the dogs in person?',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: 50
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: -100
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow",
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Where are the puppies being raised?',
  //   options: [{
  //     content: 'In the home with the family',
  //     o_color: "green",
  //     points: 50
  //   }, {
  //     content: 'In rows of cages/warehouse',
  //     o_color: "red",
  //     points: -100
  //   }, {
  //     content: 'In a kennel, garage, or outdoors',
  //     o_color: "yellow", // NEED A BETTER o_color HERE//
  //     points: 10
  //   }, {
  //     content: 'Not applicable, adult dog',
  //     o_color: "yellow",
  //     points: 0
  //   }, {
  //     content: 'Other',
  //     o_color: "yellow",
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Are the dogs/puppies seen by a veterinarian prior to going home?',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: 30
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: 5
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow",
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Will the breeder take their dog/puppy back at any point in their lives?',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: 30
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: 10
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow",
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Does the breeder require you to meet them in person?',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: 30
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: -100
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow",
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Does the breeder sell puppies directly over the internet? (You can adopt online and they ship you the animal.)',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: -100
  //   }, {
  //     content: 'No, and they explicitly state this',
  //     o_color: "red",
  //     points: 20
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow",
  //     points: 0
  //   }
  //   ]
  // },
  // {
  //   content: 'How many breeds does the breeder have available?',
  //   options: [{
  //     content: '1-2',
  //     o_color: "green", // "green" and "red" values here? //
  //     points: -100
  //   }, {
  //     content: '3',
  //     o_color: "red",
  //     points: 20
  //   }, {
  //     content: '4 or more',
  //     o_color: "red",
  //     points: -100
  //   }
  //   ]
  // },
  // {
  //   content: 'Does the breeder socialize their puppies to people, objects, and a normal home environment?',
  //   options: [{
  //     content: 'Yes, and they are raised in the home ',
  //     o_color: "green",
  //     points: 30
  //   }, {
  //     content: 'Yes, and they are not raised inside the home ',
  //     o_color: "green",
  //     points: 10
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: -30
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow", // NEED TO CONSIDER GIVING -SOME- o_color TO I DONT KNOW //
  //     points: 0
  //   }, {
  //     content: 'Not applicable, adult dog(s)', // NA HERE? //
  //     o_color: "yellow",
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Is the breeder involved with local breed clubs and competitions such as agility, herding, or showing? (AKC membership does not count towards this)',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: 30
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: 10
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow", // also "red"? //
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Do the breeders provide proof that parents are screened for health problems (hip dysplasia, heart problems)?',
  //   options: [{
  //     content: 'Yes',
  //     o_color: "green",
  //     points: 30
  //   }, {
  //     content: 'No',
  //     o_color: "red",
  //     points: 10
  //   }, {
  //     content: 'I don\'t know',
  //     o_color: "yellow", // also "red"? //
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'How much do puppies cost?',
  //   options: [{
  //     content: 'Up to $2000',
  //     o_color: "green",
  //     points: 20
  //   }, {
  //     content: 'Between $2000 and $3000 ',
  //     o_color: "red",
  //     points: 5
  //   }, {
  //     content: 'Over $3000',
  //     o_color: "yellow",
  //     points: -20
  //   }]
  // }
]

export default breederQuestions
