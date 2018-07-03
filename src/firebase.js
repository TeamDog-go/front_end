import firebase from 'firebase/app'
import 'firebase/storage'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/functions'

var config = {
  apiKey: 'AIzaSyB0IQttl1DeIKXmPZzqkQ3HLIZvZRu90FQ',
  authDomain: 'momentum-final-cohort1.firebaseapp.com',
  databaseURL: 'https://momentum-final-cohort1.firebaseio.com',
  projectId: 'momentum-final-cohort1',
  storageBucket: 'momentum-final-cohort1.appspot.com',
  messagingSenderId: '711830112074'
}

firebase.initializeApp(config)

export default firebase
