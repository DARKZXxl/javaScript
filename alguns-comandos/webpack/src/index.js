// pega todo o conteudo java script e coloca em um unico arquivo
// primeiro voce baixa o webpack com o comando "npm i -D webpack webpack-cli"
// executa com "npx webpack"
// e depois que voce usa do webpack nao e mais nessario ter o node_modules pq o webpack ja empacota tudo no "main.js"
// para configurar bastar criar um arquivo chamado "webpack.config.js"

// ver como configurar no arquivo criado!!
import dayjs from 'dayjs'

alert(dayjs().format('DD/MM/YYYY'))