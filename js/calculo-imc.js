
function calcular(){
    //declaração de variaveis
    var display   =  document.getElementById("display")
    var indicador =  document.getElementById("indicador")
    var h         =  document.getElementById("altura")
    var p         =  document.getElementById("peso")

   //validarCampo(h,p)
   if(h.value === ''){

        alert("campo altura vazio")

    }else if(p.value === ''){

        alert("campo peso vazio")

    }else if(h.value === '' || p.value === '' ){

        alert("campos vazios")

    }else{

        //conventendo texto para numero
        var altura    =  parseFloat(h.value)
        var peso      =  parseFloat(p.value)

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

            
            indicador.innerHTML="Seu imc indica obesidade 1"

        }else if(obesidade2){

            
            indicador.innerHTML="Seu imc indica obesidade 2"

        }else if(obesidade3){

           
            indicador.innerHTML="Seu imc indica obesidade 3"

        }else{

            console.log("nenhuma metrica")

        }
    
        display.innerHTML=`imc = ${imc.toFixed(2)}`   
    }  
    
}