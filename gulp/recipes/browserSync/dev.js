var browserSync	= require('browser-sync');
var bs		= require('../../options/browserSync');

module.exports = function (done) {
	browserSync(bs, done);
};