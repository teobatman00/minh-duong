const path = require("path");

module.exports = function () {
  return {
    name: "image-zoom",

    getClientModules() {
      return [path.resolve(__dirname, "./zoom.ts")];
    },
  };
};
