# Projeto Trybesmith

Neste projeto, fui responsável por criar uma API para uma loja de itens medievais usando TypeScript. A aplicação permite a realização das operações básicas de um banco de dados: Criação, Leitura, Atualização e Exclusão (CRUD). Você também usará o MySQL para armazenar os dados.

## O que foi desenvolvido

#### 1. Cadastro de Produtos

Criei um endpoint para o cadastro de produtos. Esse endpoint é acessível através do caminho `/products`. Os produtos enviados são salvos na tabela `products` do banco de dados. O corpo da requisição deve ter a seguinte estrutura:

```json
{
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}
```

#### 2. Listagem de Produtos

Criei um endpoint para a listagem de produtos. Esse endpoint é acessível através do caminho `/products`.

#### 3. Cadastro de Pessoas Usuárias

Criei um endpoint para o cadastro de pessoas usuárias. Esse endpoint é acessível através do caminho `/users`. As informações das pessoas usuárias cadastradas são salvas na tabela `users` do banco de dados. O corpo da requisição deve ter a seguinte estrutura:

```json
{ 
  "username": "MAX",
  "vocation": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

#### 4. Listagem de Pedidos

Criei um endpoint para listar todos os pedidos. Esse endpoint é acessível através do caminho `/orders`. A rota retorna todos os pedidos e os IDs dos produtos associados a eles. Note que todos os produtos são itens artesanais, portanto, únicos, e por isso, os produtos devem conter os IDs dos pedidos.

#### 5. Login de Pessoas Usuárias

Criei um endpoint para o login de pessoas usuárias. Esse endpoint é acessível através do caminho `/login`. A rota recebe os campos `username` e `password` e validar esses campos no banco de dados. Um token JWT deve ser gerado e retornado em caso de sucesso no login, contendo o ID e o username no payload.

```json
{
  "username": "string",
  "password": "string"
}
```

#### 6. Validações de Produtos

Realizei as validações referentes à criação do endpoint de cadastro de produtos. As validações são feitas sem a necessidade de conexão com o banco de dados.

#### 7. Validações de Pessoas Usuárias

Realizei as validações referentes à criação do endpoint de cadastro de pessoas usuárias. As validações são feitas sem a necessidade de conexão com o banco de dados.

#### 8. Cadastro de Pedidos

Criei um endpoint para o cadastro de pedidos. Esse endpoint é acessível através do caminho `/orders`. Um pedido só pode ser criado se a pessoa usuária estiver logada e o token JWT for validado. Os pedidos enviados são salvos na tabela `orders` do banco de dados, incluindo o ID da pessoa usuária que fez o pedido. A tabela `products` também é atualizada, associando os produtos ao pedido criado.

```json
{
  "productsIds": [1, 2]
}
```

Neste projeto, tive a oportunidade de aprimorar as seguintes habilidades:

- Desenvolvimento de uma API com TypeScript.
- Utilização do MySQL para armazenamento de dados.
- Criação de endpoints para realizar operações CRUD.
- Autenticação de pessoas usuárias e geração de tokens JWT.
- Implementação de validações de dados.
- Manipulação de relacionamentos entre tabelas no banco de dados.

## Como usar

Para testar os endpoints da API, você pode usar ferramentas como o Postman ou o Insomnia. Lembre-se de configurar a conexão com o banco de dados na aplicação.
## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- TypeScript
- Integração com banco de dados MySQL
- Autenticação

## Contato

- [Pedro Henrique] - [pedrohalmeidamendonca@gmail.com]
- [LinkedIn](https://www.linkedin.com/in/pedrohxiv/)
- [GitHub](https://github.com/pedrohxiv)

---

**Nota:** Este projeto é uma oportunidade para demonstrar suas habilidades no desenvolvimento de APIs com TypeScript, integração com banco de dados MySQL, autenticação e validações. Sinta-se à vontade para explorar e entre em contato se tiver alguma pergunta ou feedback!
