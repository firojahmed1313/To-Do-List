import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDoKwM1TKWnmZ1D38Nac7uyLxo5fn4uADk",
    authDomain: "to-do-list-firojahmed.firebaseapp.com",
    projectId: "to-do-list-firojahmed",
    storageBucket: "to-do-list-firojahmed.appspot.com",
    messagingSenderId: "520251081642",
    appId: "1:520251081642:web:b5ac1406d156c980e821d3",
    databaseURL:"https://to-do-list-firojahmed-default-rtdb.firebaseio.com",
};


export const appfirebase = initializeApp(firebaseConfig);