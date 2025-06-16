import { FastifyInstance } from 'fastify';
import { statusSchema } from './schema/Status.schemas';

export default async function statusRoutes(fastify: FastifyInstance) {
  fastify.get('/ok',
    { schema:{
      ...statusSchema
    }},
     async (_, reply) => {
    return reply.send({ message: 'API funcionando' });
  });
}
