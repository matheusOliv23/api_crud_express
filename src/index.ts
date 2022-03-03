import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users_route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Configuração de rotas
app.use(usersRoute);

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: "Sucesso" });
});

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Executando servidor na porta 3000");
});
