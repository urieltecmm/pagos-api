# Proyecto sia - Backend API

Este proyecto es una API RESTful desarrollada con Fastify, Sequelize, TypeScript, y MySQL.

## Tecnologías utilizadas

- Fastify: framework web.
- Sequelize: ORM para gestionar la base de datos. 
- TypeScript: Lenguaje de programación.
- Swagger: Documentación interactiva de la API.
- ESLint: Herramientas de linting y formato de código para mantener el código limpio.

> [!IMPORTANT]
> Estructura del proyecto
```plaintext
|root
|---.github/workFlows (En esta carpeta se encuentra el archivo que funciona para github actions)
|---src
|---|---api-gateway
|---|---|adapters (Carpeta que maneja todos los handlers)
|---|---|---plugins (Carpeta que maneja los plugins)
|---|---|---routes (Carpeta que maneja todas las rutas)
|---|---|---use-cases (Carpeta que maneja todos los use-cases)
|---|---|---utils (Carpeta que maneja los archivos como errorhandler y swaggerconfig)
|---|---|---server.ts
|---|---models
|---|---|---config (Carpeta con a configuracion de la base de datos)
|---|---|---types (Carpeta con los modelos sequelize)
|---|---|---queries (Carpeta que maneja los queries)
|---|---validators (Carpeta que maneja Zod)
|---test (En esta carpeta viene el archivo que se ejecuta con yarn test)
|---.env
|---.gitignore
|---eslint.config.mjs
|---package.json
|---README.md
|---jest.config.ts
|---tsconfig.json
|---yarn.lock
```

> [!NOTE]
> **Paso  para la Instalación**

1-Crear un fork del repositorio original:

```bash
  https://github.com/TecSJ/sia
```
2-Clonar el fork creado:

```bash
  git clone https://github.com/{your-user}/sia
```

3- instalar dependencias
```bash
  yarn install
``` 
4- configurar variables de entorno
```env
    PORT=3003
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=tu-password
    DB_NAME=nombre-de-tu-base-de-datos
    X_API_KEY = 'your api key'
```
5- Arrancar el proyecto
```bash
  yarn dev
``` 

## Funcionamiento
Tras arrancar el proyecto es requerido entrar a la ruta http://Localhost:3005/sia aqui veremos el swagger con la documentaciond e las apis, para poder ejecutar las apis es requerido un token, el cual se obtiene iniciando sesion en https://xura.tsj.mx
una vez tengas el token, En la parte superior derecha de Swagger, encontrarás un botón 'Authorize'. sera necesario precionarlo y ingresar Bearer <Token>  (el token debe ir sin <>)

> [!IMPORTANT]
> Este proyecto usa github actios para validar el correcto funcionamiento

> [!WARNING]
> Este proyecto contiene un linter, por lo que se pide que no se borre algun error por este mismo
