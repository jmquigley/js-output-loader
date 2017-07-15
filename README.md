# js-output-loader

> Takes webpack loader module output and writes it to its corresponding javascript file

When [webpack](https://webpack.github.io/) creates a bundle the artifacts processed are all packaged into a single bundle file.  This loader can be placed at the end of a module processing chain to capture the output of each artifact and save its corresponding javascript file next to the original input.

The motivation was to take [Typescript](https://www.typescriptlang.org/) `.ts/.tsx` files that are processed by [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) and  [Babel](https://github.com/babel/babel-loader) and ultimately save the output.  This loader does not change the content and passes it through to the bundle.

## Installation

To install as a development dependency
```
$ npm install --save-dev js-output-loader
```

```
$ yarn add --dev js-output-loader
```

## Configuration

```
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules|dist/,
				loader: 'js-output-loader!babel-loader!awesome-typescript-loader'
			},

```
