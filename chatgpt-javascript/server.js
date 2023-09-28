//criando um serve json
const express = require('express');
const livereload = require('livereload');

const app = express();
const serve = livereload.createServer();

//definir a pastar raiz do projeto
const publicDir = __dirname;

//Configurar o serviddor para eviar arquivo estaticos
app.use(express.static(publicDir));

//moninotar os arquivos Html, css e js e recarregar a pagina quando nescessario
serve.watch(publicDir);

//iniciar o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor de desenvolvimento esta rodando na porta ${port}`);
}); 