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
  //let user = auth.currentUser

  export{app,auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged}

/*
  function crirUsuarioComSenha(){
    
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

  createUserWithEmailAndPassword(auth, email, senha)
    .then((user) => {
   
      const usuario = user.user;
      console.log(usuario)
      alert("usuario criado com sucesso")
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });
}

  function usuarioLogado(){
    let email = document.getElementById("email").value

    
    onAuthStateChanged(auth, (user) => {
      user = email
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        alert(`${user} logado com sucesso`)
        alert(uid)
        // ...
      } else {
        // User is signed out
        // ...
        console.log("usuario não logado")
      }
    });
  }

  
  function conectarComEmailSenha(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    signInWithEmailAndPassword(auth, email, senha)
    .then((email) => {
      // Signed in 
      const user = email.email;
      // ...
      alert(`${user} logado com sucesso`)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  function usuarioDesLogado(){

    signOut(auth).then(() => {
      // Sign-out successful.
      console("usuario desconectado")
    }).catch((error) => {
      // An error happened.
      console.log("erro ao desconectar")
    });

  }*/
  
 

  
//botaoCadastrar.addEventListener("click",signInUser)
//botaoCadastrar.addEventListener("click",createUser)

 
