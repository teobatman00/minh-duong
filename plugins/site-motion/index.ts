module.exports = function () {
  const { resolve } = require("path");

  return {
    name: "site-motion",

    getClientModules() {
      return [resolve(__dirname, "./motion.ts")];
    },
  };
};
