## Test Vigia precos (app.vigiadeprecos)
> Segue a avaliação...

## Considerações
- Tempo gasto aproximado 20h
- **/src** arquivos vue
- **/api** express.js/mongoDb
- Foi utilizado para este teste um framework vue chamado [Quasar](https://quasar.dev/introduction-to-quasar) afim de otimizar sem perder qualidade.
- Desde de já agradeço a oportunidade e espero em brave fazer parte da aquipe.


## Instruções de instalação
- Instale o quasar (Framework frontend)
```
$ npm install -g @quasar/cli
```
- Execute o SPA na raiz do projeto
```
$ npx quasar dev
```
- Altere os dados de acesso ao serviço do MongoDb em **/api/src/assets/mongo-connection.js**
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


