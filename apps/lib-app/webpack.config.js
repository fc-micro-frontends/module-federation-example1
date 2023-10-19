const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "http://localhost:3001/",
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "lib_app",
      filename: "remoteEntry.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
        "./react-dom/client": "react-dom/client",
      },
    }),
  ],
};
