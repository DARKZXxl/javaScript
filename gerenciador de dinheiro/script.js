const valor = document.getElementById('valor')
let saldo = document.getElementById('saldo')
const historico = document.getElementById('historico')
const nome = document.getElementById('nome')
const enviar = document.getElementById('enviar')
const form = document.querySelector('form')
const editarBtn = document.getElementById('editar')
let saldoAtual = 0
let i = 0
saldo.innerText = saldoAtual

function mostrarNaTela(item) {
    const editar = document.createElement('button')
    editar.innerText = 'editar'
    editar.classList.add('editar')
    editar.dataset.id = item.id;

    const deletar = document.createElement('button')
    deletar.classList.add('deletar')
    deletar.innerText = 'deletar'
    deletar.dataset.id = item.id;
    
    const linha = document.createElement('p')
    linha.innerHTML = `${item.nome} R$${item.valor}`
    linha.dataset.id = item.id;

    linha.classList.add('linha')

    mudarCor(linha, item, editar, deletar);

    linha.append(editar, deletar)
    historico.append(linha)
    i++
    
    
    editar.addEventListener('click', async (ev) => {
        ev.preventDefault()
        const alvo = ev.target.dataset.id;

        const novoValor = prompt('digite o novo valor')
        const novoNome = prompt('digite o novo nome')

        if (isNaN(novoValor) || typeof novoNome !== 'string' || !novoValor.trim()) {
            throw new Error('the values ​​entered are not valid');
        }

        const valores = {
            valor: novoValor,
            nome: novoNome
        }

        try{
            const resposta = await fetch(`http://localhost:3000/trasferencias/${alvo}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(valores)
            })
        
            const salvar = await resposta.json()
        
            mudarSaldo(salvar.valor - item.valor)
            linha.innerText = `${salvar.nome} R$${salvar.valor}`
            mudarCor(linha, salvar, editar, deletar); 

            item.valor = salvar.valor;
            item.nome = salvar.nome;
        }
        catch(err) {
            console.log('Erro: ' + err)
        }

    })

    deletar.addEventListener('click', async (ev) => {
        ev.preventDefault()
        const alvo = ev.target.dataset.id;

        const resposta = await fetch(`http://localhost:3000/trasferencias/${alvo}`, {
            method: 'DELETE'
        })

        const salvar = await resposta.json()
        
        mudarSaldo(-salvar.valor)
        historico.removeChild(linha);
    })

}

// enviando a requisicao
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    if (isNaN(valor.value) || typeof nome.value !== 'string' || !novoValor.trim()) {
        throw new Error('the values ​​entered are not valid');
    }

    try {
        const valores = {
            id: i.toString(),
            valor: document.getElementById('valor').value,
            nome: document.getElementById('nome').value
        }
        const resposta = await fetch('http://localhost:3000/trasferencias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
    })
        if(!resposta.ok)  throw new Error(`Erro: ${resposta.status}`)
        const salvar = await resposta.json()
    
        form.reset()
        mostrarNaTela(salvar)
        
        mudarSaldo(salvar.valor)
    }
    catch(err) {
        console.log('Erro: ' + err)
    }
})

async function pegandoOsDados() {
    try{
        const resultado = await fetch('http://localhost:3000/trasferencias').then(res => res.json())
        
        resultado.forEach(element => {
            mostrarNaTela(element)
            mudarSaldo(element.valor)
           
        });
    }
    catch(err) {
        console.log('Erro: ' + err)
    }
}

function mudarSaldo(preco) {
    saldoAtual += parseFloat(preco);
    saldo.innerText = saldoAtual
}

window.addEventListener('DOMContentLoaded', async (ev) => {
    ev.preventDefault()

    pegandoOsDados()
})

function mudarCor(linha, reais, editar, deletar) {
    if (reais.valor >= 0) {
        linha.innerHTML = `${reais.nome} <span style="color: green;">R$ ${reais.valor} C </span>`;
    } else {
        linha.innerHTML = `${reais.nome} <span style="color: red;">-R$ ${Math.abs(reais.valor)} D </span>`;
    }

    linha.append(editar, deletar)

}