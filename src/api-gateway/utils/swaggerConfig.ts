export default {
  info: {
    title: "API Documentation",
    description: "API documentation for the project",
    version: "1.0.0",
  },
  host: "localhost:3005",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [],
  routePrefix: "/sia",
  uiConfig: {
    docExpansion: "none" as const,
    deepLinking: false,
  },
  securityDefinitions: {
    BearerAuth: {
      type: "apiKey" as const,
      name: "Authorization",
      in: "header",
      description: "JWT authorization. Enter 'Bearer <your_token>'",
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};
