

module.exports = {
  entry: {
    Jrtc: "./src/Blog.js"
    //Viewer: "./src/viewer.js"
  },
  output: {
    path: __dirname + "/public/javascripts",
    //filename: "[name].bundle.js",
    filename: "blog.js",
    publicPath: '/',
    //library: "[name]",
    //libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"],
          cacheDirectory: false
        }
      }
    ]
  }
};

