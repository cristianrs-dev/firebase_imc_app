import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCLNDNZS2nf1NqmJMeexhNOjGa3kHbcBeM",
    authDomain: "autenticar-ebe6b.firebaseapp.com",
    projectId: "autenticar-ebe6b",
    storageBucket: "autenticar-ebe6b.appspot.com",
    messagingSenderId: "1090439310633",
    appId: "1:1090439310633:web:37fff2657d9e11a3459b38",
    measurementId: "G-RGDRBSVT47"
  };

  //contas
  /*
  conta: fulano@gmail.com
  senha: 123abc
  */
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  export{app,auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged};

