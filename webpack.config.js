var webpack = require('webpack');

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            About: 'app/components/about.jsx',
            ApplicationStyles: 'app/styles/app.css',
            ErrorModal: 'app/components/errorModal.jsx',
            Examples: 'app/components/examples.jsx',
            Main: 'app/components/main.jsx',
            Nav: 'app/components/nav.jsx',
            OpenWeatherMap: 'app/api/openWeatherMap.jsx',
            Weather: 'app/components/weather.jsx',
            WeatherForm: 'app/components/weatherForm.jsx',
            WeatherInfo: 'app/components/weatherInfo.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};