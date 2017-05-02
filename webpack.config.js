var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
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
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main',
      Nav: 'app/components/nav',
      Weather: 'app/components/weather',
      About: 'app/components/about',
      Examples: 'app/components/examples',
      WeatherForm: 'app/components/weatherform',
      WeatherMessage: 'app/components/weathermessage',
      openWeatherMap: 'app/api/openweathermap',
      Loader: 'app/components/loader',
      Icon: 'app/components/Icon',
      Styles: 'app/public/style.css'
      // appStyles: 'app/public/style.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
