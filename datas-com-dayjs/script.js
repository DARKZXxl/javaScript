const dayjs = require("dayjs")
const data = dayjs('2008-10-23')
const today = dayjs()

function idade() {
    const idd = today.diff(data, 'y')
    console.log(`voce tem ${idd} anos`)
}

let final = ''
function proxima() {
    const ano = today.year() + 1
    const setar = data.set('y', ano)
    final = setar.format('YYYY/MM/DD')
    const diferenca = setar.diff(today, 'days')
    if(diferenca >= 365) {
        const full = data.set('y', ano - 1).format('DD/MM/YYYY')
        console.log(`seu proximo aniversario vai ser ${full}`)
    }
    else {
        console.log(`seu proximo aniversario vai ser ${final}`)
    }
}

function dias() {
    const anoQueVem = dayjs(final)
    const diferenca = anoQueVem.diff(today, 'days')
    if(diferenca > 365) {
        const dias = diferenca - 365
        console.log(`falta ${dias} dias para o seu aniversario`)
    }
    else {
        console.log(`falta ${diferenca} dias para o seu aniversario`)
    }
}

proxima()
idade() 
dias()
