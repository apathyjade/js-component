/*
 * @Author: xinyu.wang
 * @Date: 2017-06-19 18:39: 44
 * @Last Modified by: xinyu.wang
 * @Last Modified time: 2018-06-10 15:58:36
 */

// import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {uglify} from 'rollup-plugin-uglify'
// import stylusCssModules from 'rollup-plugin-stylus-css-modules'
import assets  from 'postcss-assets'
import postcss from 'rollup-plugin-postcss'
import posthtml from 'rollup-plugin-posthtml';
import inject from 'rollup-plugin-inject'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import sugarml from 'posthtml-sugarml'
// import spritesmith from 'rollup-plugin-spritesmith'

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.min.js',
    format: 'umd',
    name: 'aj.toast'
  },
  // external:['lodash'],
  plugins: [
    // spritesmith({
    //   glob: './src/img/**.{png,gif,jpg}',
    //   imageDist: path.resolve(__dirname, './dist/sprite-icon.png'),
    //   styleDist: path.resolve(__dirname, './dist/sprite-icon.styl'),
    //   prefix: 'icon-',
    //   multiple: 2
    // }),
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
      plugins:[assets()]
    }),
    commonjs(),
    inject({
      'objectAssign': ['es6-object-assign']
    }),
    babel({
      'plugins': ['lodash'],
      'presets': ['es2015-rollup']
    }),
    uglify(),
    // serve({
    //   // Launch in browser (default: false)
    //   open: true,
    //   verbose: false,
    //   contentBase: ['test', 'dist'],

    //   // Set to true to return index.html instead of 404
    //   historyApiFallback: false,

    //   // Options used in setting up server
    //   host: 'localhost',
    //   port: 10001
    // }),
    // livereload()
  ]
}
