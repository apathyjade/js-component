/*
 * @Author: xinyu.wang
 * @Date: 2017-06-19 18:39: 44
 * @Last Modified by: xinyu.wang
 * @Last Modified time: 2018-07-16 17:04:01
 */

import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import assets from 'postcss-assets'
import autoprefixer  from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import posthtml from 'rollup-plugin-posthtml'
import inject from 'rollup-plugin-inject'

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    file: path.resolve(__dirname, './dist/index.js'),
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
      plugins: [assets(), autoprefixer({
        browsers: [
          "iOS >= 7",
          "Android > 4.1",
          "last 2 versions"
        ]
      })]
    }),
    commonjs(),
    inject({
      'objectAssign': ['es6-object-assign']
    }),
    babel({
      'plugins': ['lodash'],
      'presets': ['es2015-rollup']
    }),
    uglify()
  ]
}
