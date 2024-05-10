import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCLNDNZS2nf1NqmJMeexhNOjGa3kHbcBeM",
    authDomain: "autenticar-ebe6b.firebaseapp.com",
    projectId: "autenticar-ebe6b",
    storageBucket: "autenticar-ebe6b.appspot.com",
    messagingSenderId: "1090439310633",
    appId: "1:1090439310633:web:37fff2657d9e11a3459b38",
    measurementId: "G-RGDRBSVT47"
  };

  
  const app = initializeApp(firebaseConfig);
  let botaoCadastrar = document.getElementById("login")

  function criarConta(){
    
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, senha)
    .then((user) => {
   
      const usuario = user.user;
      console.log(usuario)
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });

  }
botaoCadastrar.addEventListener("click",criarConta)

 
