import firebase from 'firebase/app'
// import 'firebase/storage'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/functions'

var config = {
  apiKey: 'AIzaSyAiDZHOqNHbqYy8gYTtlclnC7PCcXBNyWw',
  authDomain: 'spotcheck-quiz.firebaseapp.com',
  databaseURL: 'https://spotcheck-quiz.firebaseio.com',
  projectId: 'spotcheck-quiz',
  storageBucket: 'spotcheck-quiz.appspot.com',
  messagingSenderId: '791864635258'
}

firebase.initializeApp(config)

export default firebase
