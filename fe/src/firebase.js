import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyCHRt5xWpL6Nb07gA2xdgIEmKpG1mjlw78",
    authDomain: "g-risk-477ff.firebaseapp.com",
    projectId: "g-risk-477ff",
    storageBucket: "g-risk-477ff.appspot.com",
    messagingSenderId: "783359533266",
    appId: "1:783359533266:web:d82f4d8935f49eefab0d0b",
    measurementId: "G-DKPT3G3VF9"
};


const fire = firebase.initializeApp(firebaseConfig);
export default fire;