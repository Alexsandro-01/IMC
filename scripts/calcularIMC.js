
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

            let parametros = {
                name: nome,
                IMC: IMC,
                definicao: e.imcDef,
                consequencia: e.imcCons
            }

            elementos(parametros, atrib = 'imc')  

        }
    })
}