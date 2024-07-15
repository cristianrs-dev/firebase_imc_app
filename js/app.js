import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
document.addEventListener("DOMContentLoaded", 
function() {
  let botaoCadastrar = document.getElementById("bnt-login"); 
  botaoCadastrar.addEventListener("click", conectarComEmailSenha);
});

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
  let botaoCadastrar = document.getElementById("login")

  const auth = getAuth();
  let user = auth.currentUser

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
    //let senha = document.getElementById("senha").value
   // let user = email
    
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
      const user = email.user;
      // ...
      alert(`${email} logado com sucesso`)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  function usuarioNaoLogado(){

    signOut(auth).then(() => {
      // Sign-out successful.
      console("usuario desconectado")
    }).catch((error) => {
      // An error happened.
      console.log("erro ao desconectar")
    });

  }
  
 

  
//botaoCadastrar.addEventListener("click",signInUser)
console.log(user)
//botaoCadastrar.addEventListener("click",createUser)

 
