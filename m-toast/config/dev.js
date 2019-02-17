/*
 * @Author: xinyu.wang
 * @Date: 2017-06-19 18:39: 44
 * @Last Modified by: xinyu.wang
 * @Last Modified time: 2018-07-16 17:01:49
 */

import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import assets  from 'postcss-assets'
import autoprefixer  from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import posthtml from 'rollup-plugin-posthtml';
// import inject from 'rollup-plugin-inject'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    file: path.resolve(__dirname, './dist/index.min.js'),
    format: 'umd',
    name: 'aj.toast'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    posthtml({
      skipParse: true
    }),
    postcss({
      modules: true,
      sourceMap: true,
      extract: false,
      extensions: ['.css', '.styl'],
      autoModules: true,
      use: ['stylus'],
      plugins:[assets(), autoprefixer({
        browsers: [
          "iOS >= 7",
          "Android > 4.1",
          "last 2 versions"
        ]
      })]
    }),
    commonjs(),
    babel({
      'presets': ['es2015-rollup']
    }),
    serve({
      // Launch in browser (default: false)
      open: true,
      verbose: false,
      contentBase: ['test', 'dist'],

      // Set to true to return index.html instead of 404
      historyApiFallback: false,

      // Options used in setting up server
      host: 'localhost',
      port: 10001
    }),
    livereload()
  ]
}
