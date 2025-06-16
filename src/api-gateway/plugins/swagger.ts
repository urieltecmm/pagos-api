import PluginLoader from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import swaggerConfig from "../utils/swaggerConfig";

export default PluginLoader(async (fastify) => {
  await fastify.register(swagger, {
    swagger: {
      info: swaggerConfig.info,
      host: swaggerConfig.host,
      schemes: swaggerConfig.schemes,
      consumes: swaggerConfig.consumes,
      produces: swaggerConfig.produces,
      tags: swaggerConfig.tags,
      securityDefinitions: swaggerConfig.securityDefinitions,
    },
  });

  await fastify.register(swaggerUI, {
    routePrefix: swaggerConfig.routePrefix,
    uiConfig: swaggerConfig.uiConfig,
  });
});
