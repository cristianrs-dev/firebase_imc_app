
function calcular(){
    //declaração de variaveis
    const resultado   =  document.getElementById("resultado")
    const indicador =  document.getElementById("indicador")
    const altura  =  parseFloat(document.getElementById("altura").value)
    const peso    =  parseFloat(document.getElementById("peso").value)
    console.log(altura)
   //validarCampo(h,p)
   if(altura.value === ''){

        alert("campo altura vazio")

    }else if(peso.value === ''){

        alert("campo peso vazio")

    }else if(altura.value === '' || peso.value === '' ){

        alert("campos vazios")

    }else{

        //calculo imc
        var imc=peso/(altura*altura)
        

        //tabela de classificacao
        var muitoAbaixoDoPeso = imc < 17
        var abaixoDoPeso = imc >= 17   && imc <= 18.49 
        var pesoNormal   = imc >= 18.5 && imc <= 24.99 
        var acimaDoPeso  = imc >= 25   && imc <= 29.99 
        var obesidade1   = imc >= 30   && imc <= 34.99 
        var obesidade2   = imc >=35    && imc <= 39.99
        var obesidade3   = imc > 40

        if(muitoAbaixoDoPeso){

            
            indicador.innerHTML="Seu IMC indica muito abaixo do peso"

        }else if(abaixoDoPeso){

           
            indicador.innerHTML="Seu imc indica abaixo do peso"

        }else if(pesoNormal){

            
            indicador.innerHTML="Seu imc indica peso ideal"

        }else if(acimaDoPeso){

           
            indicador.innerHTML="Seu imc indica acima do Peso"

        }else if(obesidade1){

            
            indicador.innerHTML="Seu imc indica obesidade I"

        }else if(obesidade2){

            
            indicador.innerHTML="Seu imc indica obesidade II"

        }else if(obesidade3){

           
            indicador.innerHTML="Seu imc indica obesidade III"

        }else{

            indicador.innerHTML="nenhuma classificação encontrada"

        }
    
        resultado.innerHTML=`imc = ${imc.toFixed(2)}`   
    }  
    
}