import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCrXKYK1XLPs2lPaN2dWVJzErvBUmYwhKg',
  authDomain: 'full-stack-e-com.firebaseapp.com',
  projectId: 'full-stack-e-com',
  storageBucket: 'full-stack-e-com.appspot.com',
  messagingSenderId: '116115642800',
  appId: '1:116115642800:web:43001b06a809fd917fde75',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth(app)
export { db, auth }
