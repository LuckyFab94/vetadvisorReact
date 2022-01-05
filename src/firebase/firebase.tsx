import firebase, { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const app = initializeApp({
    apiKey: "AIzaSyCdLVdKXEAe6HPvfR8ropaZzU49wUW4LS4",
    authDomain: "vetadvisor-c161c.firebaseapp.com",
    projectId: "vetadvisor-c161c",
    storageBucket: "vetadvisor-c161c.appspot.com",
    messagingSenderId: "448526665035",
    appId: "1:448526665035:web:2e2a9e8bf9beef3ca714ce",
    measurementId: "G-GJQ23WHZ0N"
})

export const auth = getAuth()
export default app