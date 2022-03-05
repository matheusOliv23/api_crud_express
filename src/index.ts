import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.rote";
import usersRoute from "./routes/users_route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuração de rotas
app.use(usersRoute);
app.use(statusRoute);

//Tratamento dos erros
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Executando servidor na porta 3000");
});
