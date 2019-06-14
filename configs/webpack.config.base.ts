/**
 * Base webpack config used across other specific configs
 */

import * as path from "path";
import * as webpack from "webpack";
import { dependencies } from "../package.json";

export default {
    externals: [...Object.keys(dependencies || {})],

    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    output: {
        path: path.join(__dirname, "..", "src"),
        // https://github.com/webpack/webpack/issues/1114
        libraryTarget: "commonjs2"
    },

    devtool: "source-map",

    /**
   * Determine the array of extensions that should be used to resolve modules.
   */
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "production"
        }),

        new webpack.NamedModulesPlugin()
    ]
};
