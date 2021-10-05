/** @tscheck */

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

/** @type { import("webpack-dev-server").Configuration } */
const devServer = {
  open: true,
  static: {
    directory: path.resolve(__dirname, "static")
  }
}

/** @type { import("webpack").Configuration } */
module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.js",
  },
  output: {
    path: dist,
    filename: "[name].js",
  },
  devServer,
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "static"), to: dist }],
    }),

    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
