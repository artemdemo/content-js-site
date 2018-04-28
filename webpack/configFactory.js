const find = require('find');
const path = require('path');

const configFactory = (webpackConfig) => {
    const modules = find.fileSync(/\.js$/, `${__dirname}/../source/module`);
    console.log(modules);
    const entries = {};
    modules.forEach((modulePath) => {
        // Get file name but without extension
        const fileName = path.basename(modulePath).split('.').slice(0, -1).join('.');
        entries[fileName] = modulePath;
    });
    webpackConfig.entry = entries;
    return webpackConfig;
};

module.exports = configFactory;
