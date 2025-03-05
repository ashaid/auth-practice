import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "..", "database.sqlite"),
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
