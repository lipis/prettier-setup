module.exports = function(config) {
  config.set({
    files: ['foo.js'],
    autoWatch: false,
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'foo.js': ['coverage'],
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    singleRun: true,
  });
};
