module.exports = function(karma) {
    karma.set({
        browsers: ["PhantomJS"],
        frameworks: ["mocha", "chai"],
        files: ["dist/deps.min.js"],
        reporters: ["progress"],
        singleRun: false,
        autoWatch: true,
    });
};
