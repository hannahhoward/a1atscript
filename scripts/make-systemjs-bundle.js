var path = require('path');
var Builder = require('systemjs-builder');

var config = {
  baseURL: 'dist',
  paths: {
    'a1atscript': "./src/a1atscript.js",
    'a1atscript/*': './src/a1atscript/*'
  },
  transpiler: 'babel',
  babelOptions: {
    stage: 0
  }
};


build('a1atscript', '../dist/a1atscript.system.bundle.js');

function build(name, outputFile) {
  var devBuilder = new Builder();

  devBuilder.config(config);

  devBuilder.bundle(name, path.resolve(__dirname, outputFile), {normalize: true, sourceMaps: true, sourceMapContents: true}).then(function() {
    process.exit(0);
  }, function(err) {
    console.error('dev died', err);
    process.exit(1);
  });
}

process.stdin.resume();
