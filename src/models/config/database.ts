import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { setupModels } from "../types";

dotenv.config();

const sequelize: Sequelize =
  process.env.NODE_ENV === "test"
    ? new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        define: {
          timestamps: false,
        },
      })
    : new Sequelize({
        dialect: "mysql",
        host: process.env.DB_HOST as string,
        username: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_NAME as string,
        logging: process.env.NODE_ENV !== "development",
        define: {
          timestamps: false,
        },
      });

setupModels(sequelize);

export default sequelize;
