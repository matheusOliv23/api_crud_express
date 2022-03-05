import express from "express";
import basicAuthenticationMidleware from "./middlewares/basic.authentication.middleware";
import errorHandler from "./middlewares/error-handler.middleware";
import bearerAuthentication from "./middlewares/jwt-authentication.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.rote";
import usersRoute from "./routes/users_route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuração de rotas
// app.use(usersRoute);
app.use(statusRoute);
app.use(bearerAuthentication, usersRoute);
app.use(authorizationRoute);
// app.use(basicAuthenticationMidleware);


//Tratamento dos erros
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Executando servidor na porta 3000");
});
