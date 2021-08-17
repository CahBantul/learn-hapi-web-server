const hapi = require('@hapi/hapi');

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`server running at ${server.info.uri}`);
};

init();
