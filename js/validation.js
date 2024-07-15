function campoEmailVazio(){
  const email = document.getElementById("email").value 
  const userName = email.trim()
  let vazio = false
  if(userName === ''){
    vazio = true
  }
  return vazio
}

function campoSenhaVazio(){
  const senha = document.getElementById("senha").value 
  const password = senha.trim()
  let vazio = false
  if(password === ''){
    vazio = true
  }
  return vazio
}

function verificaCamposVazios(){
    if(campoEmailVazio() === true){
      alert("campo email vazio")
    }else if(campoSenhaVazio() === true){
      alert("campo senha vazio")
    }
}
document.getElementById("bnt-login").addEventListener('click',verificaCamposVazios)