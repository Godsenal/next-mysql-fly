import { drizzle, type MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import { createConnection } from "mysql2";

let db: MySql2Database<typeof schema>;

export const connectDB = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!db) {
    const connection = createConnection(process.env.DATABASE_URL);
    db = drizzle(connection, {
      mode: "default",
      schema,
    });
  }

  return db;
};
