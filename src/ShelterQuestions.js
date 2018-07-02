const shelterQuestions = [
  {
    content: 'Are you allowed to visit where the dogs are kept?',
    source: 'shelter',
    id: 11,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No, and it’s a shelter with a building',
      o_color: 'red',
      points: -100
    }, {
      o_content: 'No, and it’s a rescue',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Does the shelter perform temperament tests/aggression screenings?',
    source: 'shelter',
    id: 12,
    options: [{
      o_content: 'Yes, they use the SAFER test or Assess-A-Pet',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'Yes, they use their own methods',
      o_color: 'yellow',
      points: 0
    }, {
      o_content: 'No, or they just “go by feel”',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Where are the puppies being raised?',
    source: 'shelter',
    id: 13,
    options: [{
      o_content: 'Not applicable, I’m looking for a dog over 4 months old',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'In the home with the family',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'In very crowded and/or dirty conditions',
      o_color: 'red',
      points: -30
    }, {
      o_content: 'In a kennel, garage, or outdoors',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'Not applicable, I’m looking for a dog over 4 months old',
      o_color: 'green',
      points: 10
    }]
  },
  {
    content: 'Are the dogs seen by a veterinarian prior to adoption?',
    source: 'shelter',
    id: 14,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No, but the shelter/rescue vaccinates them',
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
    }]
  },
  {
    content: 'Will the shelter/rescue take their dogs back at any point in their lives?',
    source: 'shelter',
    id: 15,
    options: [{
      o_content: 'Yes',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'No',
      o_color: 'yellow',
      points: -10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Does the shelter/rescue require you to meet them in person?',
    source: 'shelter',
    id: 16,
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
    content: 'Does the shelter/rescue adopt out dogs directly over the internet? (You can adopt online and they ship you the animal.)',
    source: 'shelter',
    id: 17,
    options: [{
      o_content: 'Yes',
      o_color: 'red',
      points: -100
    }, {
      o_content: 'No, and they explicitly state this',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'Has the individual socialized the puppies to people, objects, and a normal home environment?',
    source: 'shelter',
    id: 18,
    options: [{
      o_content: 'Yes, and they are raised in the home ',
      o_color: 'green',
      points: 10
    }, {
      o_content: 'Yes, and they are raised inside the shelter ',
      o_color: 'yellow',
      points: 0
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
    content: 'What is the adoption fee for the individual’s dog or puppy?',
    source: 'shelter',
    id: 19,
    options: [{
      o_content: 'Over $350',
      o_color: 'red',
      points: -30
    }, {
      o_content: '$0-350',
      o_color: 'green',
      points: 20
    }, {
      o_content: 'I don\'t know',
      o_color: 'yellow',
      points: 0
    }]
  },
  {
    content: 'What type of shelter/rescue is it?',
    source: 'shelter',
    id: 19,
    options: [{
      o_content: 'Open-admission / municipal',
      o_color: 'yellow',
      points: 10
    }, {
      o_content: 'Limited-admission / “no-kill”',
      o_color: 'yellow',
      points: 10
    }, {
      o_content: 'I don\'t know / other',
      o_color: 'yellow',
      points: 10
    }]
  }
]

export default shelterQuestions
