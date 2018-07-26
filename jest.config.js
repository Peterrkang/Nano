module.exports = {
	moduleNameMapper: {
		'\\.module\\.css$': 'identity-obj-proxy',
		'\\.css$': require.resolve('./test/style-mock'),
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
