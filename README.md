# Seta

> Uma aplicação focada em pessoas que querem conseguir o primeiro emprego.
> Front(React + TypeScript) e Back (Python + Django) no mesmo repositório.

## Rotas

`base_url` = "http://localhost:8000"

### Cadastro

__POST__ :`base_url`/accounts/

#### Corpo:

```json
{
    "first_name": "Nome",
    "last_name": "Sobrenome",
    "email": "email@email.com",
    "password": "1234"
}
```

> Obs: "email" e "contact" são únicos.

#### Resposta:

`status: 201`

```json
{
    "id": 1,
    "last_login": null,
    "is_superuser": false,
    "first_name": "Nome",
    "last_name": "Sobrenome",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2021-07-16T02:03:54.996213Z",
    "email": "email@email.com",
    "biography": null,
    "isVisible": true,
    "contact": null
}
```

### Login

__POST__ : `base_url`/login/

#### Corpo:

```json
{
	"email": "email@email.com",
	"password": "1234"
}
```

#### Resposta:

`status: 200`

```json
{
    "token": "01119fe9cb766b1697cc4fb6acfd50b60087e211",
    "id": 1,
    "email": "email@email.com",
    "first_name": "Nome",
    "last_name": "Sobrenome",
    "biography": null
}
```

### Usuário específico

__GET__ : `base_url`/< int:id >/

#### Resposta:

`status: 200`

```json
{
  "id": 1,
  "last_login": null,
  "is_superuser": false,
  "first_name": "Nome",
  "last_name": "Sobrenome",
  "is_active": true,
  "date_joined": "2021-07-16T00:26:57.802932Z",
  "email": "email@email.com",
  "biography": null,
  "isVisible": false,
  "contact": null
}
```

### Todos usuários

__GET__ : `base_url`/accounts/

#### Resposta:
```json
[
  {
    "id": 1,
    "last_login": null,
    "is_superuser": false,
    "first_name": "Nome",
    "last_name": "Sobrenome",
    "is_active": true,
    "date_joined": "2021-07-16T00:26:57.802932Z",
    "email": "email@email.com",
    "biography": null,
    "isVisible": false,
    "contact": null
  },
  {
    "id": 2,
    "last_login": null,
    "is_superuser": false,
    "first_name": "Patrick",
    "last_name": "Estrela",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2021-07-16T02:03:54.996213Z",
    "email": "howard@gmail.com",
    "biography": null,
    "isVisible": true,
    "contact": "61999999999"
  },
"... e os outros usuários"
]
```

### Atualizar

__PUT__ : `base_url`/accounts/< int:id >/

Header `2`:
```js
{
    "Content-Type": "aplication/json",
    "Authorization": "Token <token>"    
}
```

#### Corpo:
```json
{
  "first_name": "howard",
  "contact": "61999999990"
}
```

#### Resposta:

`status: 200`

```json
{
  "id": 1,
  "last_login": null,
  "is_superuser": false,
  "first_name": "howard",
  "last_name": "Sobrenome",
  "is_active": true,
  "date_joined": "2021-07-16T00:26:57.802932Z",
  "email": "email@email.com",
  "biography": null,
  "isVisible": false,
  "contact": "61999999990"
}
```

### Deletar

__DELETE__ : `base_url`/accounts/< int:id >/

#### Resposta:

`status: 204`
