const path = require('path');

const outputConfig = {
    destPath: "./dist"
};

const entryConfig = [
    "./src/App.ts"
];


const copyPluginPatterns = {
    patterns: [
        { from: "./src/assets/images", to: "images" },
        { from: "./src/assets/fonts", to: "fonts" },
        { from: "./src/assets/vendor", to: "js" },
    ]
};


const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
};


const scssConfig = {
    destFileName: "css/app.min.css"
};

const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;