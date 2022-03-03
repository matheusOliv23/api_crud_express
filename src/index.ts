import express from "express";
import statusRoute from "./routes/status.rote";
import usersRoute from "./routes/users_route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuração de rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Executando servidor na porta 3000");
});
