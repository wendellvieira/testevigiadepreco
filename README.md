# Test Vigia precos (app.vigiadeprecos)
> Segue a avaliação...

## Instruções de instalação
- Instale o quasar (Framework frontend)
```
$ npm install -g @quasar/cli
```
- Execute o SPA na raiz do projeto
```
$ npx quasar dev
```
- Altere os dados de acesso ao serviço do MongoDb
```javascript
...
const connectionUrl = 'mongodb://localhost:27017';
const database = 'vigiadb';
...
```
- Execute o script para a API
```
$ cd ./api
$ npm run dev
```


