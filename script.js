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
            res.style.display = 'block'

            document.getElementById('descobrir-peso-ideal').innerHTML = `
            Se quiser descobrir seu peso ideal, clique no botão abaixo`

        }
        /**Exibe o peso ideal do usuario caso ele solicite */
        else if(parametro === 'pesoIdeal') {

        minIdeal = 18.5 * (altura.value * altura.value)
        maxIdeal = 24.9 * (altura.value * altura.value)
        
        document.getElementById('p-pesoIdeal').innerHTML = 
            `Seu peso ideal está entre <strong>${Math.round(minIdeal.toFixed(2))} Kg </strong>
            e <strong>${Math.round(maxIdeal.toFixed(2))} Kg</strong>. O peso pode variar nesse 
            intervalo de acordo com nível de sedentarismo, metabolismo etc.`
        }
    }
}


function clacularIMC(peso, altura, nome) {

    let classificação_imc = null
    let tipos_IMC = []
    let IMC = peso / (altura * altura)

    if (IMC < 16) {
        classificação_imc = 0
    }
    else if (IMC >= 16 && IMC < 17) {
        classificação_imc = 1
    }
    else if (IMC >= 17 && IMC < 18.5) {
        classificação_imc = 2
    }
    else if (IMC >= 18.5 && IMC < 25) {
        classificação_imc = 3
    }
    else if (IMC >= 25 && IMC < 30) {
        classificação_imc = 4
    }
    else if (IMC >= 30 && IMC < 35) {
        classificação_imc = 5
    }
    else if (IMC >= 35 && IMC <= 40) {
        classificação_imc = 6
    }
    else if (IMC > 40) {
        classificação_imc = 7
    }

    tipos_IMC = [

        {
            imcDef: 'Você está extremamente abaixo do peso, não tem nem classificação para essa faixa.',
            imcCons: 'É sério, não tem definição para essa faixa de IMC, procure um médico.'
        },

        {
            imcDef: 'Você está muito abaixo do peso.',
            imcCons: 'Entre as consequências estão queda de cabelo, infertilidade e ausência menstrual'
        },

        {
            imcDef: 'Você está abaixo do peso.',
            imcCons: 'Pode sofrer com fadiga, estresse e ansiedade'
        },

        {
            imcDef: 'Seu peso está normal.',
            imcCons: 'Você tem pouco risco de sofrer com doenças cardíacas e vasculares'
        },

        {
            imcDef: 'Você está acima do peso.',
            imcCons: 'Há chances de você ter fadiga, má circulação e varizes'
        },

        {
            imcDef: 'Você ja se enquadra na Obesidade Grau I.',
            imcCons: 'Propenção a diabetes, angina, infarto e aterosclerose. Se cuide'
        },

        {
            imcDef: 'Você está com Obesidade grau II.',
            imcCons: 'Pode sofrer apneia do sono e falta de ar'
        },

        {
            imcDef: 'Você está com Obesidade Grau III.',
            imcCons: 'É assustador, você pode ter refluxo, dificuldade para se mover, diabetes, infarto e AVC .Você precisa muito de um médico'
        },
    ]

    tipos_IMC.forEach((e, i) => {

        if (classificação_imc == i) {
            document.getElementById('p-resultado').innerHTML = 
            `Então <strong>${nome}</strong>, o seu Índice de Massa 
            Corporal está em <strong>${IMC.toFixed(1)}</strong>. <span>${e.imcDef}</span> 
            <span>${e.imcCons}</span>.`
        }
    })
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