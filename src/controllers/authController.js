
import {auth,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword, onAuthStateChanged} from '../app.js'
import {User} from "../models/UserModel.js"



document.addEventListener("DOMContentLoaded", 
function() {
  let btnLogin = document.getElementById("btn-login");
  let btnsignOut =  document.getElementById("btn-signOut")

  if(btnLogin){
    btnLogin.addEventListener("click", conectarComEmailSenha);
  }

  if(btnsignOut){
    btnsignOut.addEventListener("click", desconectarUser);
  }
    
})


function campoVazio(id){
  const campo = document.getElementById(id)
  if(campo === null){
    return true
  }
  const input = campo.value.trim()
  return input === ''
  
}

function verificaCamposVazios(event){
  const email = document.getElementById("email").value.trim()
  let hasError = false
  if(campoVazio('email')){
    alert("campo email vazio")
     hasError = true
  }else if(campoVazio('senha')){
    alert("campo senha vazio")
     hasError = true
  }else if(!validarEmail(email)){
    alert("e-mail invalido")
  }

  if(hasError){
    event.preventDefault()
  }
}


function validarEmail(email){
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}


function conectarComEmailSenha(){

  User.email= document.getElementById("email").value
  User.senha = document.getElementById("senha").value
  

    signInWithEmailAndPassword(auth, User.email, User.senha)
    .then((userCredential) => {
      const user = auth.currentUser;

      if (user != null) {
        window.location.href='index.html'
        alert(`${user.email} logado`)
       
      } else {
        alert("usuario e senha invalidos")
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  function desconectarUser(){
    signOut(auth).then(() => {
      alert("usuario desconectado")
       window.location.href='login.html'
    }).catch((error) => {
      alert(error.message)
    });
  }

