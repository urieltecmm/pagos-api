import { FastifyReply } from "fastify";
import { ZodError } from "zod";
import { UniqueConstraintError } from "sequelize"

export class CustomError extends Error {
  customCode: number;

  constructor(message: string, customCode: number) {
    super(message);
    this.customCode = customCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

interface ErrorHandlerOptions {
  reply: FastifyReply;
  error: Error | ZodError | CustomError | UniqueConstraintError;
  defaultStatusCode?: number;
}

export const handleError = ({
  reply,
  error,
  defaultStatusCode = 500,
}: ErrorHandlerOptions) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: "Bad Request",
      details: error.errors.map((e) => ({
        path: e.path.join("."),
        message: e.message,
      })),
    });
  }

  if (error instanceof CustomError) {
    return reply.status(error.customCode).send({
      error: error.message,
    });
  }

  if (error instanceof UniqueConstraintError) {
    return reply.status(400).send({
      error: "Bad Request",
      message: "La combinación ya existe",
    });
  }

  if (error instanceof Error) {
    // Maneja errores generales
    return reply.status(defaultStatusCode).send({
      error: "Internal Server Error",
      message: error.message,
    });
  }

  reply.status(defaultStatusCode).send({
    error: "Internal Server Error",
    message: "An unexpected error occurred",
  });
};
