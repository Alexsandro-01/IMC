var usuario = ''
var genero = ''
var altura = 0
var peso = 0
var IMC = 0
var imcDef = ''
var imcCons = ''
var res = document.getElementById('res')

var minIdeal = 0 //peso minimo ideal
var maxIdeal = 0 //peso maximo ideal


function Calcular(parametro) {

    usuario = document.getElementById('nome').value
    sexo = document.getElementsByName('sexo')

        for(var i = 0 in sexo){
            if(sexo[i].checked) {
                genero = sexo[i].value
            }
        }
    
    altura = document.getElementById('alturaInput').value
    peso = document.getElementById('pesoInput').value

    
    if (parametro === 'IMC') {
        
        IMC = peso / (altura * altura)

        

        if(IMC < 16) {
            imcDef = 'Você está extremamente abaixo do peso, não tem nem classificação para essa faixa.'
            imcCons = 'É sério, não tem definição para essa faixa de IMC, procure um médico.'
        }
        else if(IMC >= 16 && IMC < 17) {
            imcDef = 'Você está muito abaixo do peso'
            imcCons = 'entre as consequências estão queda de cabelo, infertilidade e ausência menstrual'
        }
        else if(IMC >= 17 && IMC < 18.5) {
            imcDef = 'Você está abaixo do peso'
            imcCons = 'pode sofrer com fadiga, estresse e ansiedade'
        }
        else if(IMC >= 18.5 && IMC < 25) {
            imcDef = 'Seu peso está normal'
            imcCons = ',olha só , você tem pouco risco de sofrer com doenças cardíacas e vasculares'
        }
        else if(IMC >= 25 && IMC < 30) {
            imcDef = 'Você está acima do peso'
            imcCons = 'há chances de você ter fadiga, má circulação e varizes'
        }
        else if(IMC >= 30 && IMC < 35) {
            imcDef = 'Você ja se enquadra na Obesidade Grau I'
            imcCons = 'propenção a diabetes, angina, infarto e aterosclerose. Se cuide'
        }
        else if(IMC >= 35 && IMC <= 40) {
            imcDef = 'Você está com Obesidade grau II'
            imcCons = 'pode sofrer apneia do sono e falta de ar'
        }
        else if(IMC > 40) {
            imcDef = 'Você está com Obesidade Grau III'
            imcCons = 'é assustador, você pode ter refluxo, dificuldade para se mover, diabetes, infarto e AVC .Você precisa muito de um médico'
        }

        res.style.display = 'block'
        document.getElementById('nome-usuario').innerHTML = usuario
        document.getElementById('imc-usuario').innerHTML = IMC.toFixed(2)
        document.getElementById('imc-definicao').innerHTML = imcDef
        document.getElementById('imc-consequencia').innerHTML = imcCons
    }
    else if(parametro === 'pesoIdeal') {

        minIdeal = 18.5 * (altura * altura)
        maxIdeal = 24.9 * (altura * altura)
        
        document.getElementById('pesoIdeal').style.display = 'none'
        document.getElementById('res-pesoIdeal').style.display = 'block'
        document.getElementById('min').innerHTML = Math.round(minIdeal.toFixed(2)) + 'Kg'
        document.getElementById('max').innerHTML = Math.round(maxIdeal.toFixed(2)) + 'Kg'

    }


    console.log(usuario, genero, altura, peso, IMC.toFixed(2))
}