const breederQuestions = [
  {
    content: 'Are you allowed to visit where the puppies are kept?',
    source: 'breeder',
    id: 1,
    options: [{
      o_id: 1,
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    },
    {
      o_id: 2,
      o_content: 'No',
      o_color: 'red',
      points: -100
    }, {
      o_id: 3,
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: -10
    }
    ]
  },
  {
    content: 'Does the breeder ship puppies via airplane?',
    source: 'breeder',
    id: 2,
    options: [{
      o_id: 1,
      o_content: 'Yes',
      o_color: 'red',
      points: -30
    },
    {
      o_id: 2,
      o_content: 'No',
      o_color: 'green',
      points: 10
    }, {
      o_id: 3,
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }
    ]
  },
  {
    content: 'Is the breeder United States Department of Agriculture (USDA) licensed?',
    source: 'breeder',
    id: 3,
    options: [{
      o_id: 1,
      o_content: 'Yes',
      o_color: 'red',
      points: -100
    },
    {
      o_id: 2,
      o_content: 'No',
      o_color: 'green',
      points: 10
    }, {
      o_id: 3,
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }
    ]}
  // ADD COMMA TO LINE ABOVE
  // {
  //   content: 'Where are the puppies being raised?',
  //   source: 'breeder',
  //   id: 4,
  //   options: [{
  //     o_content: 'In the home with the family',
  //     o_color: 'green',
  //     points: 10
  //   }, {
  //     o_content: 'In a warehouse/rows of cages',
  //     o_color: 'red',
  //     points: -30
  //   }, {
  //     o_content: 'In a kennel or garage',
  //     o_color: 'yellow',
  //     points: 0
  //   }, {
  //     o_content: 'I don\'t know',
  //     o_color: 'yellow',
  //     points: -10
  //   }]
  // },
  // {
  //   content: 'Are the puppies seen by a veterinarian prior to going home?',
  //   source: 'breeder',
  //   id: 5,
  //   options: [{
  //     o_content: 'Yes',
  //     o_color: 'green',
  //     points: 10
  //   }, {
  //     o_content: 'No',
  //     o_color: 'red',
  //     points: -30
  //   }, {
  //     o_content: 'I don\'t know',
  //     o_color: 'yellow',
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Will the breeder take their dog/puppy back at any point in their lives?',
  //   source: 'breeder',
  //   id: 6,
  //   options: [{
  //     o_content: 'Yes',
  //     o_color: 'green',
  //     points: 10
  //   }, {
  //     o_content: 'No',
  //     o_color: 'red',
  //     points: -30
  //   }, {
  //     o_content: 'I don\'t know',
  //     o_color: 'yellow',
  //     points: 0
  //   }]
  // },
  // {
  //   content: 'Does the breeder require you to meet them in person?',
  //   source: 'breeder',
  //   id: 7,
  //   options: [{
  //     o_content: 'Yes',
  //     o_color: 'green',
  //     points: 10
  //   }, {
  //     o_content: 'No',
  //     o_color: 'red',
  //     points: -100
  //   }, {
  //     o_content: 'I don\'t know',
  //     o_color: 'yellow',
  //     points: -10
  //   }]
  // },
  // {
  //   content: 'How many breeds does the breeder have available?',
  //   source: 'breeder',
  //   id: 8,
  //   options: [{
  //     o_content: '1-2',
  //     o_color: 'green',
  //     points: +10
  //   }, {
  //     o_content: '3',
  //     o_color: 'yellow',
  //     points: 0
  //   }, {
  //     o_content: '4 or more',
  //     o_color: 'red',
  //     points: -100
  //   }
  //   ]
  // },
  // {
  //   content: 'Does the breeder provide proof that both parents are screened for health problems (hip dysplasia, heart problems, etc.)?',
  //   source: 'breeder',
  //   id: 9,
  //   options: [{
  //     o_content: 'Yes',
  //     o_color: 'green',
  //     points: 10
  //   }, {
  //     o_content: 'No',
  //     o_color: 'yellow',
  //     points: -10
  //   }, {
  //     o_content: 'I don\'t know',
  //     o_color: 'yellow',
  //     points: -10
  //   }]
  // },
  // {
  //   content: 'How much do puppies cost?',
  //   source: 'breeder',
  //   id: 10,
  //   options: [{
  //     o_content: 'Up to $2000',
  //     o_color: 'green',
  //     points: 10
  //   }, {
  //     o_content: 'Between $2000 and $3000 ',
  //     o_color: 'yellow',
  //     points: 0
  //   }, {
  //     o_content: 'Over $3000',
  //     o_color: 'red',
  //     points: -30
  //   }]
  // }
]

export default breederQuestions
