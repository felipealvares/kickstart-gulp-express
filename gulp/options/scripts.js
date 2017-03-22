/**
 * Scripts
 * configuration
 * object
 *
 */

// config
var config = require('../../config.json');
var pkg = require('../../package.json');
var banner = '/*!\n' +
          ' * ' + pkg.fullName + ' (' + pkg.homepage + ')\n' +
          ' * Copyright ' + new Date().getFullYear() + ' ' + pkg.author + '\n' +
          ' */\n';

module.exports = {
  banner: banner
};
