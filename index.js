const { HydycoServer } = require("@hydyco/core");
const { HydycoMongoose, HydycoRoutes } = require("@hydyco/mongoose-plugin");
const routes = require("./routes/index");

const server = new HydycoServer({
  port: 3002,
  logger: false,
  auth: {
    secretOrKey: "random", // jwt auth token
  },
});

const db = HydycoMongoose({
  connectionString: "yourConnectionString",
});

server.registerDatabase(db);

server.registerRoutes([...HydycoRoutes(routes)]);

server.start();
