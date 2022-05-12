import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDCP4Ni7bXl-FFdflwaJywyBSwFudxiFSw",
  authDomain: "shop-15238.firebaseapp.com",
  projectId: "shop-15238",
  storageBucket: "shop-15238.appspot.com",
  messagingSenderId: "354645455112",
  appId: "1:354645455112:web:10ef0a9d456575b4f0bcbd"
};


const fire = firebase.initializeApp(firebaseConfig);



export default fire;