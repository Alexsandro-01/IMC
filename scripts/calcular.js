var nome = ''
var genero = ''
var altura = 0
var peso = 0
var IMC = 0
var res = document.getElementById('resultado')

var minIdeal = 0 //peso minimo ideal
var maxIdeal = 0 //peso maximo ideal


function Calcular(parametro) {

    nome = document.getElementById('nome')
    sexo = document.getElementsByName('sexo')

        for(var i = 0 in sexo){
            if(sexo[i].checked) {
                genero = sexo[i].value
            }
        }
    
    altura = document.getElementById('alturaInput')
    peso = document.getElementById('pesoInput')
    let labelHomen = document.getElementById('labelHomen')
    let labelMulher = document.getElementById('labelMulher')

    if(nome.value == '') {

        nome.style.border = 'solid red'
    }
    else if(genero == ''){

        labelHomen.style.color = 'red'
        labelMulher.style.color = 'red'
    }   
    else  if(altura.value == '' || altura.value % 1 == 0) {

        altura.value = ''
        altura.style.border = 'solid red'
    }
    else if(peso.value == '') {

        peso.style.border = 'solid red'
    }
    else {
        //retorna o estilo dos eleemntos ao normal
        nome.style.border = 'none'
        labelHomen.style.color = 'white'
        labelMulher.style.color = 'white'
        altura.style.border = 'none'
        peso.style.border = 'none'

        if (parametro === 'IMC') {

            clacularIMC(peso.value, altura.value, nome.value)
            
            /*Volta as cores dos elementos ao normal, as informações do usuario tenham sido corrigidas*/

        }

        /**Exibe o peso ideal do usuario caso ele solicite */
        else if(parametro === 'pesoIdeal') {

            let pesoIdeal = {
                minIdeal: 18.5 * (altura.value * altura.value),
                maxIdeal: 24.9 * (altura.value * altura.value)
            }
        
            elementos(pesoIdeal, atrib = 'pesoIdeal')
            
        }
    }
}



function display() {
    let toggle = document.querySelector(".toggle")
    let altura = window.innerHeight

    if(toggle.style.right == "0%") {
        toggle.style.right = "-100%"
    }
    else {
        toggle.style.right = "0%"
        toggle.style.height = altura -70 + "px"
    }
}