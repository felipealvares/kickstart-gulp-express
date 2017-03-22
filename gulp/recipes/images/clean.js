var del = require('del');

// config
var config = require('../../../config.json');

module.exports = function (done) {
  del([config.destination.images, config.source.styles + '/sprite.scss', config.source.images + '/sprite.png'], { force: true })
    .then(function () { done(); });
};
