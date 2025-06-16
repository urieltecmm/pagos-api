import fp from "fastify-plugin";
import fs from "fs";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";

const autenticacion: FastifyPluginAsync = async (fastify) => {
    fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const authHeader = request.headers.authorization;
            const TOKEN = authHeader && authHeader.split(" ")[1];

            if (!TOKEN) { throw new Error("Usuario no autenticado!"); }
            const keypath = path.resolve(__dirname, "../../@models/public.key");
            const llave = fs.readFileSync(keypath, "utf8");
            const opcionesVerificacion = {
                issuer: "Tecnologico superior de Jalisco",
                audience: "tsj.mx",
                expiresIn: "1h",
                algorithms: ["RS256"] as jwt.Algorithm[],
            };
            const datos = jwt.verify(TOKEN, llave, opcionesVerificacion) as JwtPayload;
            (request.params as any)._idCredencial = datos.idCredencial;

        } catch (error: unknown) {
            if (error instanceof jwt.JsonWebTokenError) {
                console.log("Error de JWT:", (error as Error).message);
                reply.status(401).send({ message: "Token inválido" });
            } else if (error instanceof jwt.TokenExpiredError) {
                console.log("El token ha expirado");
                reply.status(401).send({ message: "Token expirado" });
            } else {
                console.log("Otro error:", error);
                reply.status(500).send({ message: (error as Error).message });
            }
        }
    });
};

export default fp(autenticacion);
