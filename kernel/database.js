const {
  HydycoModel,
  MongoosePlugin,
  MongooseRoutes,
} = require("@hydyco/mongoose-plugin");

module.exports = {
  plugin: MongoosePlugin,
  routesHandler: MongooseRoutes,
  model: HydycoModel,
  config: {
    connectionString: "yourConnectionString",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
