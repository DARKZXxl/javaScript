// por padrao quando executar o webpack ele usa o nome da chave de entrada do arquivo js
// a chave "mode" configura o modo que o arquivo js vai ser criado
// o output configura o arquivo de saida 
// o path.resolve(__dirname) coloca o caminho da ate minha pasta atual
// o public e o nome do arquivo/pasta que o "main.js" vai ser criado
const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
        hello: './src/hello.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        // nome do arquivo
        // quando tem dois pontos de entrada tem que usar o [name] para diferenciar os arquivos
        filename: 'bundle.[name].min.js'
    }
}