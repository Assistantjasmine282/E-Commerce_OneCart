// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
//   authDomain: "loginonecart.firebaseapp.com",
//   projectId: "loginonecart",
//   storageBucket: "loginonecart.firebasestorage.app",
//   messagingSenderId: "242165258894",
//   appId: "1:242165258894:web:0155a2ced93e20073247df"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()


// export {auth , provider}




import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLqAzpa7hlnfFVhe85KivRnYIFZYP40-c",
  authDomain: "loginecoomereceapp.firebaseapp.com",
  projectId: "loginecoomereceapp",
  storageBucket: "loginecoomereceapp.firebasestorage.app",
  messagingSenderId: "406985620825",
  appId: "1:406985620825:web:51ee6177cce6692a716048"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

