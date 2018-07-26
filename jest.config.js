module.exports = {
	setupFiles: [
		'<rootDir>/tests/shim.js',
		'<rootDir>/tests/setup.js'
	],
	moduleNameMapper: {
		'\\.module\\.css$': 'identity-obj-proxy',
		'\\.css$': require.resolve('./tests/style-mock'),
	},
	collectCoverageFrom: ['**/src/**/*.js'],
	coverageThreshold: {
		global: {
			statements: 24,
			branches: 20,
			functions: 29,
			lines: 25,
		}
	}
}
