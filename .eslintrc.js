module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'plugins': ['testcafe'],
	'extends': ['plugin:testcafe/recommended', 'eslint:recommended'],
	'parserOptions': {
		'ecmaVersion': 13,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
