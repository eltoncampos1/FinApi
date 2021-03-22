const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const costumers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uuid();

  costumers.push({
    cpf,
    name,
    id,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333, () => {
  console.log("Server is running");
});
