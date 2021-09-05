/**
 * Register your middleware here
 * global middleware - runs at global level, even before plugins
 * namedMiddleware - registers named middleware
 */

const { authMiddleware } = require("@hydyco/auth");

module.exports = {
  globalMiddleware: [errorHandler],
  namedMiddleware: { authMiddleware },
};

function errorHandler(err, req, res, next) {
  console.log(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}
