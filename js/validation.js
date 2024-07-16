function campoVazio(id){
  const campo = document.getElementById(id).value.trim()
  return campo === ''
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



document.getElementById("bnt-login").addEventListener('click',verificaCamposVazios)