import { FastifySchema } from 'fastify';

export const statusSchema: FastifySchema = {
  description: 'Verifica el estado del API',
  tags: ['Status'],
  summary: 'Devuelve un mensaje indicando que el API está funcionando',
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    }
  }
};