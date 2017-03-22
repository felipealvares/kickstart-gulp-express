/**
 * Images
 * configuration
 * object
 *
 */

module.exports = {
	spritesmith: {
		imgName: '../images/sprite.png',
		cssName: 'sprite.scss',
		cssFormat: 'css',
		padding: 10,
		cssOpts: {
			cssSelector: function (item) {
				return '.' + item.name;
			},
			padding: 10
		}
	}
};
