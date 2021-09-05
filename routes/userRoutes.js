const { RestApi } = require("@hydyco/rest-plugin");

class UserRoutes extends RestApi {
  before(request, response, next) {
    console.log("Method " + request.methodCall + "is called from user routes");
    next();
  }
}

module.exports = UserRoutes;
