var del = require('del');

// config
var config = require('../../../config.json');

module.exports = function (done) {
  del(config.destination.css, { force: true })
    .then(function () { done(); });
};
