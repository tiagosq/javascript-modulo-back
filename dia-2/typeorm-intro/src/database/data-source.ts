import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUserTable1723224741840 } from "./migrations/1723224741840-CreateUserTable";
import { User } from "./entities/User";
import { CreateTableProfile1723227565310 } from "./migrations/1723227565310-CreateTableProfile";
import { Profile } from "./entities/Profile";


export const MainDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "be_dia_2",
  synchronize: true,
  logging: true,
  entities: [User, Profile],
  migrations: [CreateUserTable1723224741840, CreateTableProfile1723227565310],
  subscribers: [],
});