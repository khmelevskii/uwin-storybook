require('babel-polyfill');

// Webpack config for development
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var SvgStore = require('webpack-svgstore-plugin');

var staticPath = path.resolve(__dirname, '../static');

var AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 10',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

// Since we use .babelrc for client and server, and we don't want HMR enabled on the server, we have to add
// the babel plugin react-transform-hmr manually here.

// make sure react-transform is enabled
babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
var reactTransform = null;
for (var i = 0; i < babelLoaderQuery.plugins.length; ++i) {
  var plugin = babelLoaderQuery.plugins[i];
  if (Array.isArray(plugin) && plugin[0] === 'react-transform') {
    reactTransform = plugin;
  }
}

if (!reactTransform) {
  reactTransform = ['react-transform', {transforms: []}];
  babelLoaderQuery.plugins.push(reactTransform);
}

if (!reactTransform[1] || !reactTransform[1].transforms) {
  reactTransform[1] = Object.assign({}, reactTransform[1], {transforms: []});
}


// make sure react-transform-hmr is enabled
reactTransform[1].transforms.push({
  transform: 'react-transform-hmr',
  imports: ['react'],
  locals: ['module']
});

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, include: [path.resolve(__dirname, '..')], loaders: ['babel?' + JSON.stringify(babelLoaderQuery), 'eslint-loader']},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.sass$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass?precision=10&indentedSyntax=sass' },
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(__dirname, '..'),
  },

  progress: true,

  plugins: [
    new SvgStore([
      path.join(staticPath, 'icons', '**', '*.svg'),
      path.join(
        path.resolve(__dirname, '..'), 'node_modules', 'material-design-icons', 'alert',
        'svg', 'production', '*48px.svg'
      ),
    ],
    '',
    {
      name: '[hash].svg',
      chunk: 'preview',
      prefix: 'icon-',
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      }
    }),

    // hot reload
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
  ],

  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({
        addDependencyTo: bundler,
        path: [
          process.cwd() + '/components',
        ],
      }),
      require('precss')(),
      require('rucksack-css')(),
      require("postcss-calc")(),
      require('postcss-color-function')(),
      require('postcss-inline-svg')({
        path: path.join(staticPath, 'icons'),
      }),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    ];
  },
};
