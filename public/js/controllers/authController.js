
import {auth,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword, onAuthStateChanged} from '../app.js'



document.addEventListener("DOMContentLoaded", 
function() {
  let btnLogin = document.getElementById("btn-login");
  let btnsignOut =  document.getElementById("btn-signOut")

  if(btnLogin){
    btnLogin.addEventListener("click", conectarComEmailSenha);
  }
  
  if(btnsignOut){
    btnsignOut.addEventListener("click",userDeslogado)
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

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      alert(user.email)
      
      
      window.location.href='imc.html'
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }


  