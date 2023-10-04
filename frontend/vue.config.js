const { defineConfig } = require('@vue/cli-service');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: ['vuetify'],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            staticOptions: {
                index: 'home.html',
            },
        },
    },
    outputDir: 'dist',
    publicPath: '/',
    assetsDir: 'static',
    pages: {
        home: {
            template: 'public/index.html',
            entry: 'src/pages/main_home.js',
            filename: 'home.html',
            title: 'VueDjangoPhoto/home.html',
            minify: false,
        },
        post_list: {
            template: 'public/index.html',
            entry: 'src/pages/main_post_list.js',
            filename: 'post_list.html',
            title: 'VueDjangoPhoto/post_list.html',
            minify: false,
        },
        post_detail: {
            template: 'public/index.html',
            entry: 'src/pages/main_post_detail.js',
            filename: 'post_detail.html',
            title: 'VueDjangoPhoto/post_detail.html',
            minify: false,
        },
    },

    configureWebpack: {
        plugins: [
            new FileManagerPlugin({
                events: {
                    onStart: {
                        delete: [
                            {
                                source: '../static/*',
                                options: { force: true },
                            },
                            {
                                source: '../templates/*',
                                options: { force: true },
                            },
                        ],
                    },

                    onEnd: {
                        copy: [
                            { source: './dist/static', destination: '../static/' },
                            { source: './dist/favicon.ico', destination: '../static/img/' },
                            { source: './dist/home.html', destination: '../templates/' },
                            { source: './dist/post*.html', destination: '../templates/blog/' },
                        ],
                    },
                },
            }),
        ],
    },
});
