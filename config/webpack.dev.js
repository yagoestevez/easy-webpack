// Add the 'path' module to out configuration.
const path = require( 'path' );

// Export the configuration so that Webpack knows what we want it to do.
module.exports = {
  // Define an entry point, where Webpack will look for the starter file(s).
  // More info: https://webpack.js.org/concepts/entry-points/
  entry: {
    main: './src/main.js'
  },
  // Define the mode to be used by Webpack (development/production).
  // More info: https://webpack.js.org/concepts/mode/
  mode: 'development',
  // Define the processed output to a specific location on your project.
  // More info: https://webpack.js.org/concepts/output/
  output: {
    filename: 'bundle.js',                      // The name of the output file with all out JS code.
    path: path.resolve( __dirname, '../dist' ), // The path to store the output. An absolute path,
                                                // that's why we use path.resolve().
    publicPath: 'js'                            // The public path to store the output.
  },
  // Defines the path from which the dev server is going to serve out files for development.
  // More info: https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: 'dist'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}