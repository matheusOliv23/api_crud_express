import { Pool } from "pg";

const connectionString = process.env.ELEPHANT_URL;
 
const db = new Pool({ connectionString });

export default db;
