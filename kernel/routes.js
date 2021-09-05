const { RestApi } = require("@hydyco/rest-plugin");
const UserRoutes = require("../routes/userRoutes");
module.exports = {
  baseUrl: "/api/v1",
  restModule: RestApi,
  overrides: {
    user: UserRoutes,
  },
  customRoutes: [],
};
