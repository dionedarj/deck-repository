/* eslint global-require: off, import/no-dynamic-require: off */

/**
 * Builds the DLL for development electron renderer process
 */

import * as webpack from "webpack";
import * as path from "path";
import * as merge from "webpack-merge";
import baseConfig from "./webpack.config.base";
import { dependencies } from "../package.json";
import CheckNodeEnv from "../internals/scripts/CheckNodeEnv";

CheckNodeEnv("development");

const dist = path.join(__dirname, "..", "dll");

const totalConfig = merge.smart(baseConfig, {
    context: path.join(__dirname, ".."),

    devtool: "eval",

    mode: "development",

    target: "electron-renderer",

    externals: ["fsevents", "crypto-browserify"],

    /**
   * Use `module` from `webpack.config.renderer.dev.ts`
   */
    module: require("./webpack.config.renderer.dev.ts").default.module,

    entry: {
        renderer: [...Object.keys(dependencies || {})]
    },

    output: {
        library: "renderer",
        path: dist,
        filename: "[name].dev.dll.js",
        libraryTarget: "var"
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(dist, "[name].json"),
            name: "[name]"
        }),

        /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
        new webpack.EnvironmentPlugin({
            NODE_ENV: "development"
        }),

        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {
                context: path.join(__dirname, "..", "src"),
                output: {
                    path: path.join(__dirname, "..", "dll")
                }
            }
        })
    ]
});

export default totalConfig;
