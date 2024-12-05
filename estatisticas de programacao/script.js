let opcao = ''
const media = (...valor) => {
    console.log(valor)
    const string = valor.toString()
    const num = string.split(' ' || ',')
    const result = num.map(str => parseInt(str));
    const conta = result.reduce((total, item) => total + item, 0)
    const contaFinal = conta / num.length
    alert('sua media e ' + contaFinal)
}

do {
    opcao = prompt('escolha sua opcao \n 1. calcular media \n 2. calcular media ponderada \n 3. moda \n 4. mediana \n 5. sair')
    switch(opcao) {
        case '1':
            const valores = prompt('digite todos os valores abaixo')
            media(valores)
            break
        case '2':
            mediaPonderada()
            break
        case '3':
            moda()
            break
        case '4':
            mediana()
            break
        case '5': 
            alert('saindo...')
            break
        default:
            alert('opcao invalida')
    }
} while (opcao !== '5');