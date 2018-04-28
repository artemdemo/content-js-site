const find = require('find');
const path = require('path');
const colors = require('colors/safe');

const configFactory = (webpackConfig) => {
    const entries = {
        bundle: `${__dirname}/../source/index.js`,
    };
    try {
        const modules = find.fileSync(/\.js$/, `${__dirname}/../source/modules`);
        modules.forEach((modulePath) => {
            // Get file name but without extension
            const fileName = path.basename(modulePath).split('.').slice(0, -1).join('.');

            if (entries.hasOwnProperty(fileName)) {
                console.log(colors.red('Overwriting entry point:'), colors.red.bold(fileName));
                console.log(colors.red('Previous value:'), entries[fileName]);
                console.log(colors.red('New value:'), modulePath);
                console.log(' ');
            }

            entries[fileName] = modulePath;
        });
    } catch (e) {
        console.log(colors.red.bold('Error while adding modules to entry points:'));
        console.log(e);
        console.log(' ');
    }

    webpackConfig.entry = entries;
    return webpackConfig;
};

module.exports = configFactory;
