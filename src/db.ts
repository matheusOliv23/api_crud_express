import { Pool } from "pg";

const connectionString =
  "postgres://yniyhacb:WWfNuLFKHm4r-vml_opuTkBtTfNzuPos@motty.db.elephantsql.com/yniyhacb";
const db = new Pool({ connectionString });

export default db;
