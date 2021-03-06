/**
 * Plugins are meant to be used as express middleware
 * you can have your custom plugins and integrate with hydyco
 * module - express router , can be function which returns express router
 * config - you can pass some config , you need to have function for that
 * invoke - pass on true if you want to invoke the function
 * serverPath - you can have custom path defined here you want
 */
const { AuthPlugin } = require("@hydyco/auth");
const { HydycoAdmin } = require("@hydyco/admin-plugin");
const { FilePlugin } = require("@hydyco/file-plugin");
const { DocsPlugin } = require("@hydyco/docs-plugin");
const Welcome = require("../welcome");

module.exports = [
  {
    module: AuthPlugin,
    config: {
      secretOrKey: "random",
      expiresIn: "1y",
    },
    invoke: true,
  },
  { module: HydycoAdmin },
  {
    module: FilePlugin,
    config: { uploadDir: "uploads" },
    serverPath: "/admin",
    invoke: true,
  },
  { module: DocsPlugin, serverPath: "/admin", invoke: true },
  { module: Welcome, serverPath: "/" },
];
