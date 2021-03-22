<h1> FinApi</h1>

<p> Finance api, created using nodeJS </p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Pre-requisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Finance api

## Functional Rules

- user can create an account;
- The user cannot register with an already registered cpf;
- The user must be able to create transactions like deposits and whitdraws;
- must be able to list statements;

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)

### Used to test the application

- [Insomnia](https://insomnia.rest)

### Dependencies

```json
  "dependencies": {
    "express": "^4.17.1",
    "uuid": "^8.3.2"
  }
```

### DevDependencies

```json
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
```

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [npm](https://www.npmjs.com)

```sh
npm install npm@latest -g
```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

```sh
npm install -g yarn
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eltoncampos1/FinApi.git
   ```
2. Install NPM packages
   ```sh
   npm install or Yarn
   ```

<!-- USAGE EXAMPLES -->

## Usage

START SERVER

```sh
    npm or yarn dev
```


### Create an account

URL: [POST] http://localhost:3333/account

BODY:

```json
{
	"cpf": "0000000",
	"name": "username"
}
```


### make an deposit

URL: [POST] http://localhost:3333/deposit

pass cpf as request.headers

BODY:

```json
{
	"description": "deposit description",
	"amount": 2000.00
}
```


### make an withdraw

URL: [POST] http://localhost:3333/withdraw

pass cpf as request.headers

BODY:

```json
{
	"amount": 100
}
```


### List user statments

pass cpf as request.headers

URL: [GET] http://localhost:3333/statement

PREVIEW:

```json
[
  {
    "description": "description",
    "amount": 2000,
    "createdAt": "2021-03-22T02:47:14.703Z",
    "type": "credit"
  },
  {
    "amount": 100,
    "createdAt": "2021-03-22T02:50:22.993Z",
    "type": "debit"
  },
  {
    "amount": 100,
    "createdAt": "2021-03-22T02:50:25.338Z",
    "type": "debit"
  }
]
```


### List user statments by date

URL: [GET] http://localhost:3333/statement/date?{date}

pass cpf as request.headers

PREVIEW:

```json
[
  {
    "description": "descriptio",
    "amount": 2000,
    "createdAt": "2021-03-22T02:47:14.703Z",
    "type": "credit"
  },
  {
    "amount": 100,
    "createdAt": "2021-03-22T02:50:22.993Z",
    "type": "debit"
  },
  {
    "amount": 100,
    "createdAt": "2021-03-22T02:50:25.338Z",
    "type": "debit"
  }
]

```


### List account

URL: [GET] http://localhost:3333/account

pass cpf as request.headers

PREVIEW:

```json
{
  "cpf": "0000000",
  "name": "username",
  "id": "82dcfb93-e3c8-4ec9-8b2d-178739347d43",
  "statement": [
    {
      "description": "Rocketseat",
      "amount": 2000,
      "createdAt": "2021-03-22T02:47:14.703Z",
      "type": "credit"
    },
    {
      "amount": 100,
      "createdAt": "2021-03-22T02:50:22.993Z",
      "type": "debit"
    },
    {
      "amount": 100,
      "createdAt": "2021-03-22T02:50:25.338Z",
      "type": "debit"
    }
  ]
}
```
### List balance

URL: [GET] http://localhost:3333/balance

pass cpf as request.headers

PREVIEW:

```json
1800
```


### Update name account

URL: [PUT] http://localhost:3333/account

pass cpf as request.headers

BODY:

```json
{
	"name": "elton de campos"
}
```


### delete account

URL: [PUT] http://localhost:3333/account

pass cpf as request.headers

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/eltoncampos1/FinApi/issues/new) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

LinkedIn - [Elton Campos](https://www.linkedin.com/in/elton-campos-074015164/)

Email - [Elton Campos](eltoncampos36@gmail.com) - eltoncampos36@gmail.com

Github - [eltoncampos1](https://github.com/eltoncampos1)

Project Link: [https://github.com/eltoncampos1/FinApi](https://github.com/eltoncampos1/FinApi)

