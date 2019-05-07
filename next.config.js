// next.config.js
const path = require('path');
const withCSS = require('@zeit/next-css');

function HACK_removeMinimizeOptionFromCssLoaders(config) {
    console.warn(
        'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
    );

    config.module.rules.forEach(rule => {
        if (Array.isArray(rule.use)) {
            rule.use.forEach(u => {
                if (u.loader === 'css-loader' && u.options) {
                    delete u.options.minimize;
                }
            });
        }
    });
}

module.exports = withCSS({
    webpack(config) {
        HACK_removeMinimizeOptionFromCssLoaders(config);
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        return config;
    },
});