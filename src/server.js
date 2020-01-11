const Hapi = require('@hapi/hapi');
const {convertToRoman} = require("./numerals")

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: 'localhost'
  });

  server.route({
    method: "GET",
    path: "/romannumeral",
    handler: (request, h) => {
      try {
        const queryNumber = request.query.query
        if(typeof queryNumber === "undefined") throw new Error("Input not correct; no input given. Try using ?query=")
        return convertToRoman(Number(queryNumber))
      } catch (err) {
        // if error includes "input not correct" then it was a user error. Otherwise it's an internal server error
        return h.response(err.message).code(err.message.includes("Input not correct") ? 400 : 500)
      }
    }
  })
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();