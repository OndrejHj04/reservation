import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDcrnNSPYg1IzgrCP8otJr7vWO_gVcGb9w",
  authDomain: "reservation-34041.firebaseapp.com",
  projectId: "reservation-34041",
  storageBucket: "reservation-34041.appspot.com",
  messagingSenderId: "525441419597",
  appId: "1:525441419597:web:d274d792ecee71bf5acf04",
  measurementId: "G-RFKWH19LGH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}