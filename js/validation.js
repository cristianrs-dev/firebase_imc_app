
const { JSDOM } = require('jsdom');

// Criando um contexto jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document

function campoVazio(id){
  const campo = document.getElementById(id).value.trim()
  return campo === ''
}


function campoEmailVazio(){
  const email = document.getElementById("email").value.trim()
  return email === ''
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

module.exports={validarEmail,campoVazio}

//document.getElementById("bnt-login").addEventListener('click',verificaCamposVazios)