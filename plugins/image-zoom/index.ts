const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'image-zoom',

    getClientModules(options) {
      return [path.resolve(__dirname, './zoom.ts')];
    },
  };
};