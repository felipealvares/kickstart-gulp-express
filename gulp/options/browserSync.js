/**
 * BrowserSync
 * configuration
 * object
 *
 */
// config
var argv        = require('yargs').argv;
var hostPort    = argv.vsport || '';

// aux var
var bs;

if(hostPort != '') {
  bs = {
    proxy: {
      target: "http://localhost:" + hostPort, // change to your VS IIS Express setting
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }
} else {
  bs = {
    server: {
      baseDir: ''
    },
    options: {
      reloadDelay: 250
    },
    notify: false,
  }
}

module.exports = bs;