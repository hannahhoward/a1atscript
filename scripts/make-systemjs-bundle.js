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


build('a1atscript', '../dist/a1atscript.system.bundle.js', '../dist/a1atscript.system.bundle.min.js');

function build(name, inputFile, outputFile) {
  var devBuilder = new Builder();

  devBuilder.config(config);

  devBuilder.bundle(name, path.resolve(__dirname, inputFile), {normalize: true, sourceMaps: true}).then(function() {
    var prodBuilder = new Builder();
    prodBuilder.config(config);
    prodBuilder.bundle(name, path.resolve(__dirname, outputFile), {sourceMaps: false, minify: true, normalize: true}).then(function() {
      process.exit(0);
    }, function(err) {
      console.error('prod died', err);
      process.exit(1);
    });

  }, function(err) {
    console.error('dev died', err);
    process.exit(1);
  });
}

process.stdin.resume();
