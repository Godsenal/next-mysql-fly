import { connectDB } from "@/db";
import { migrate } from "drizzle-orm/mysql2/migrator";

const migration = async () => {
  const db = await connectDB();
  await migrate(db, { migrationsFolder: "drizzle" });
};

migration();
