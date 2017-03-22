var del = require('del');

// config
var config = require('../../../config.json');

module.exports = function (done) {
  del(config.destination.js, { force: true })
    .then(function () { done(); });
};
