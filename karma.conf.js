var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: !!process.env.CI,

    frameworks: [ 'mocha' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './components/*/*.test.js',
      './HOCs/*/*.test.js',
    ],

    preprocessors: {
      './components/*/*.test.js': [ 'webpack', 'sourcemap' ],
      './HOCs/*/*.test.js': [ 'webpack', 'sourcemap' ],
    },

    reporters: [ 'mocha' ],
    coverageReporter: {
      type: 'text'
    },

    mochaReporter: {
      output: 'minimal' // minimal
    },

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader")
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url', query: {limit: 10240} },
          { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
          { test: /\.sass$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass?precision=10&indentedSyntax=sass' },
          { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
          { test: /\.css$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
          { test: /\.json$/, loader: 'json-loader' },
        ]
      },
      resolve: {
        modulesDirectories: [
          '.',
          'HOCs',
          'components',
          'node_modules'
        ],
        extensions: ['', '.json', '.js']
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
      ],
      postcss: function plugins(bundler) {
        return [
          require('postcss-import')({
            addDependencyTo: bundler,
            path: [
              process.cwd() + '/components',
            ],
          }),
        ];
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true, // important!!
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
    },

    webpackServer: {
      noInfo: true
    }
  });
};
