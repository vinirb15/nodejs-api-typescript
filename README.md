# NodeJS api

Api de consulta de filmes do ghibliapi

<details>
  <summary>
    Requisitos
  </summary>

<br>
<a href="https://nodejs.org/en/" target="_blank">NodeJs</a>
<br>
<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">NPM</a>
<br>
<br>

<b>Utilizando o docker para gerar o banco</b>
<br>
<a href="https://docs.docker.com/engine/install/" target="_blank">Docker</a>
<br>
<a href="https://docs.docker.com/compose/install/" target="_blank">Docker-Compose</a>

</details>
<hr>

<details>
  <summary>
   Configurando o ambiente e rodando a aplicação
  </summary>

<br>
<b>Conexão com o banco de dados:</b>
<p>Caso não possua um banco criado disponibilizei um docker-compose que irá criar um banco de dados e conectar automaticamente com o servidor, mas caso queira utilizar um banco existente basta alterar as configurações no arquivo <b>.env</b></p>

```
NODE_ENV=production
prod_access_key_id=(ip do banco)
prod_access_key_user=(usuário do banco)
prod_access_secrety_key=(senha do usuário)
prod_access_database=(nome da base de dados)
```

<b>Baixar as dependências:</b>

```
npm install
```

<b>Rodar as migrations:</b>

```
npx knex migrate:latest
```

<b>Rodar as seed:</b>

```
npx knex seed:run
```

<b>Executar a aplicação:</b>

```
npm start
```

### Rodando o linter (opcional)
```
npx eslint --ext .ts ./
```
</details>
<hr>

<br>

## API Entry Points:
<details>
  <summary>
    Get filmes
  </summary>

[![Generic badge](https://img.shields.io/badge/Request-GET-gree.svg)]('#')

```
http://localhost:5000/ap1/v1/movies?&limit=2&offset=2
```

[![Ask Me Anything !](https://img.shields.io/badge/Response-ok-1abc9c.svg)](https://GitHub.com/Naereen/ama)
```json
{
	"movies": [
		{
			"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
			"title": "My Neighbor Totoro",
			"original_title": "となりのトトロ",
			"description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
			"score": "93",
			"release_date": "1988"
		},
		{
			"id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
			"title": "Kiki's Delivery Service",
			"original_title": "魔女の宅急便",
			"description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
			"score": "96",
			"release_date": "1989"
		}
	],
	"total": 22
}
```
</details>
<hr>

<details>
  <summary>
    Get informação do filme
  </summary>


[![Generic badge](https://img.shields.io/badge/Request-GET-blue.svg)](https://shields.io/)

```
http://localhost:5000/ap1/v1/movies/(id do filme)
```

[![Ask Me Anything !](https://img.shields.io/badge/Response-ok-1abc9c.svg)](https://GitHub.com/Naereen/ama)



```json
{
	"id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
	"title": "Only Yesterday",
	"original_title": "おもひでぽろぽろ",
	"description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
	"score": "100",
	"release_date": "1991"
}
```
</details>
<hr>

## Possiveis melhorias
- Entry Points Post e Delete para finalizar o CRUD
- Containerização da API
- Deploy da aplicação
- Implementação de teste automatizados (JEST)

## Referência 
https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API