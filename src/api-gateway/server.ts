import Fastify from "fastify";
import AutoLoad from "@fastify/autoload";
import path from "path";
import dotenv from "dotenv";
import sequelize from "@models/config/database";
import cors from "@fastify/cors";

dotenv.config();

export const createServer = async () => {
  await sequelize.sync({ force: false, alter: false });

  const fastify = Fastify({ logger: true });

  fastify.register(cors, {
    origin: "*", 
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization","api_key"],
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    ignorePattern: /.*(schema).*/,
    options: { prefix: "/api" },
  });

  return fastify;
};

if (require.main === module) {
  createServer().then((fastify) => {
    const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3005;
    fastify.listen({ port: PORT, host: "0.0.0.0" }).catch((err) => {
      fastify.log.error(err);
      process.exit(1);
    });
  });
}
