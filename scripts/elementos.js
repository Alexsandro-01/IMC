function elementos(parametro, atrib, ) {

	if(atrib == 'imc') {

		//desabilita o botão para não ser consultado novamente
		let botao = document.getElementById('botao1')
		botao.setAttribute('disabled', 'disabled')
		
		let resultado = document.createElement('div')
		resultado.className = 'caixa'
		resultado.id = 'resultado'
		
		let div = document.createElement('div')
		div.id = 'caixa-resultado'
		
		let h4 = document.createElement('h4')
		h4.innerHTML = 'Resultado'
		
		let p_resultado = document.createElement('p')
		p_resultado.id = 'p-resultado'

		p_resultado.innerHTML = `
		Então <strong>${parametro.name}</strong>, o seu Índice de Massa 
		Corporal está em <strong>${parametro.IMC.toFixed(1)}</strong>. <span>${parametro.definicao}</span> 
		<span>${parametro.consequencia}</span>.
		`

		let p_descobrir_peso = document.createElement('p')
		p_descobrir_peso.id = 'descobrir-peso-ideal'
		p_descobrir_peso.innerHTML = `
			Se quiser descobrir seu peso ideal, clique no botão abaixo
		`

		let pesoIdeal = document.createElement('div')
		pesoIdeal.id = 'pesoIdeal'
		
		let button = document.createElement('button')
		button.setAttribute("onclick", "Calcular('pesoIdeal')")
		button.id = 'botao2'
		button.innerHTML = 'Descubra'

		div.appendChild(h4)

		div.appendChild(p_resultado)

		div.appendChild(p_descobrir_peso)

		pesoIdeal.appendChild(button)

		div.appendChild(pesoIdeal)

		resultado.appendChild(div)

		let coluna = document.getElementById('coluna')

		coluna.insertBefore(resultado, coluna[1])

	}

	else if( atrib == 'pesoIdeal') {

		let botao = document.getElementById('botao2')
		botao.setAttribute('disabled', 'disabled')

		let res_pesoIdeal = document.createElement('div')
		res_pesoIdeal.id = 'res_pesoIdeal'
		
		let p_pesoIdeal = document.createElement('p')
		p_pesoIdeal.id = 'p-pesoIdeal'
		p_pesoIdeal.innerHTML = `
			Seu peso ideal está entre <strong>${Math.round(parametro.minIdeal.toFixed(2))} Kg </strong>
			e <strong>${Math.round(parametro.maxIdeal.toFixed(2))} Kg</strong>. O peso pode variar nesse 
			intervalo de acordo com nível de sedentarismo, metabolismo etc.
		`

		res_pesoIdeal.appendChild(p_pesoIdeal)

		let div = document.getElementById('caixa-resultado')
		//console.log(div)
		div.insertBefore(res_pesoIdeal, div[5])


	}
	
}