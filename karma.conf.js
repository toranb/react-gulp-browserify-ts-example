module.exports = function(karma) {
    karma.set({
        browsers: ["PhantomJS"],
        frameworks: ["mocha", "chai"],
        files: ["dist/deps.min.js"],
        reporters: ['progress', 'coverage'],
        singleRun: false,
        autoWatch: true,
        preprocessors: {
          "dist/deps.min.js": "coverage"
        },
        coverageReporter: {
            type: "text",
        }
    });
};
