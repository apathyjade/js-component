/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-21 14:51:59
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-21 14:51:59
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import autoprefixer  from 'autoprefixer'
import json from 'rollup-plugin-json';
import cssnano from 'cssnano';

export default {
  input: 'src/dialog.js',
  output: {
    file: './dist/dialog.js',
    format: 'umd',
    name: 'fe.dialog'
  },
  plugins: [
    json(),
    babel(),
    postcss({
      use: ['stylus'],
      modules: {
        camelCase: true
      },
      plugins: [
        autoprefixer({
          browsers: [
            "ie >= 8",
            "> 1%",
            "last 2 versions"
          ]
        }),
        cssnano()
      ]
    }),
    resolve({ jsnext: true, main: true, browser: true }),
    commonjs()
  ]
};