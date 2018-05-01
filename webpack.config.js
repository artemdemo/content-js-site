const isProduction = process.env.NODE_ENV === 'production';
const configOptions = {
    buildFolder: './website',
    extractCssFile: false,
    isProduction,
};

const webpackConfig = isProduction ?
    require('./webpack/webpack.prod')(configOptions) :
    require('./webpack/webpack.dev')(configOptions);

if (process.argv.indexOf('--json') === -1) {
    // eslint-disable-next-line no-console
    console.log('\n', ' ❤ isProduction:', isProduction, '\n');
}

module.exports = webpackConfig;
