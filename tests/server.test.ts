import { createServer } from '../src/api-gateway/server';
import request from 'supertest';
import sequelize from '@models/config/database'; // Importamos sequelize para hacer una validación

describe('API Tests', () => {
  let server: any;

  beforeAll(async () => {
    try {
      server = await createServer();
      await server.ready();
      console.log('Servidor inicializado correctamente');
    } catch (error) {
      console.error('Error al iniciar el servidor:', error);
      throw error; // Lanza el error para que los tests fallen si la inicialización falla
    }
  });

  afterAll(async () => {
    if (server && server.server) {
      try {
        await server.server.close();
      } catch (err) {
        console.error('Error al cerrar el servidor:', err);
        process.exit(1);
      }
    } else {
      console.error('El servidor no se inicializó correctamente.');
      process.exit(1); 
    }
  });

  it('Debe responder en el endpoint GET /api/status con 200', async () => {
    const response = await request(server.server).get('/api/status/ok');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });

  it('Debe conectar correctamente a la base de datos', async () => {
    try {
      await sequelize.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      expect(false).toBe(true);
    }
  });

  it('Swagger debe estar accesible en la ruta /sia', async () => {
    const response = await request(server.server).get('/sia');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Swagger');
  });
});
