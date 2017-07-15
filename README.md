# js-output-loader

> Takes webpack loader module output and writes it to its corresponding javascript file

When [webpack](https://webpack.github.io/) creates a bundle the artifacts processed are all packaged into a single bundle file.  This loader can be placed at the end of a module processing chain to capture the output of each artifact and save its corresponding javascript file next to the original input.

The motivation was to take [Typescript](https://www.typescriptlang.org/) `.ts/.tsx` files that are processed by [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) and  [Babel](https://github.com/babel/babel-loader) and ultimately save the output.  This loader does not change the content and passes it through to the bundle.

Benefits:

- Have a local copy of the `.js` file that was created by webpack next to the `.ts/.tsx` file.  Can see and debug any output created by the bundle.
- The `.js` file can be used directly in unit tests with `import`.  If the tests are local to the module then commonjs import statements can be used.  No need to require the entire bundle in unit tests.
- No problems with css modules and snapshots in jest.
- The bundle is still created, so it doesn't interfer with normal bundle creation.
- The `.js` files are updated by the webpack watcher when the parent file is changed.


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

This module should be placed first in the loader list (which means it is used last by webpack...)
