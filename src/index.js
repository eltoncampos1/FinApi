const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const customers = [];

function verifyIfExistAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Costumer not found." });
  }

  return next();
}

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadExists) {
    return response.status(400).json({ error: "Customer already exists." });
  }

  customers.push({
    cpf,
    name,
    id: uuid(),
    statement: [],
  });

  return response.status(201).send();
});

app.get("/statement", verifyIfExistAccountCPF, (request, response) => {
  return response.json(customer.statement);
});

app.listen(3333, () => {
  console.log("Server is running");
});
