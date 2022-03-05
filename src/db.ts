import { Pool } from "pg";

const connectionString = "xxxxxx";
const db = new Pool({ connectionString });

export default db;
