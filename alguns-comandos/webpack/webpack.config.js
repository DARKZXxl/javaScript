// por padrao quando executar o webpack ele usa o nome da chave de entrada do arquivo js
// a chave "mode" configura o modo que o arquivo js vai ser criado
// o output configura o arquivo de saida 
// o path.resolve(__dirname) coloca o caminho da ate minha pasta atual mas antes tem que dar um require em o modulo "path" para pegar de fontes externar
// o public e o nome do pasta que o arquivo de saida vai ser 

const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
    },
    mode: 'development',
    output: {
        // nome da pasta
        path: path.resolve(__dirname, 'dist'),
        // nome do arquivo
        // quando tem dois pontos de entrada tem que usar o [name] para diferenciar os arquivos
        filename: 'index.js'
    },
    module: {
        rules: [{
            // em quais arquivos ele vai executar o loader
            test: /\.css$/,
            // serve para escolher qual loader o webpack vai usar mas tem baixar antes
            use: ['style-loader', 'css-loader']
        }]
    }

}