const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
	alias({
		'@assets': 'src/assets',
		'@components': 'src/components',
		'@constants': 'src/constants',
		'@pages': 'src/pages',
		'@store': 'src/store',
		'@utils': 'src/utils',
	})(config);

	return config;
}