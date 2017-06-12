module.exports = function(config) {
  config.set({
    files: ["**/*.js"],

    reporters: ["progress", "coverage"],

    preprocessors: {
      "**/*.js": ["coverage"]
    },
    frameworks: ['jasmine'],
    
    // optionally, configure the reporter
    coverageReporter: {
      type: "html",
      dir: "coverage/"
    },
    singleRun: true,
  });
};
