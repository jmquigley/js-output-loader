const fs = require('fs');
const loaderUtils = require("loader-utils");

module.exports = function(content, map) {
	if (this.cacheable) this.cacheable();
	let callback = this.async();
	let query = loaderUtils.getOptions(this) || {};

	// The name of the module that is being loaded and changed
	let infile = this.resourcePath;
	let outfile = infile.replace(/\.(ts|tsx)$/, '.js');

	this.addDependency(infile);

	if ('debug' in query && query.debug) {
		console.log(`Input file : ${infile}`);
		console.log(`Output file: ${outfile}`);
		console.log(`Query: ${JSON.stringify(query)}`);
		console.log(`Content: ${content}`);
	}

	fs.writeFile(outfile, content, (err) => {
		if (err) return callback(err);
		callback(null, content);
	});
};
