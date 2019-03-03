/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-21 14:51:59
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-21 14:51:59
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import notify from 'rollup-plugin-notify';
import progress from 'rollup-plugin-progress';
import {eslint} from 'rollup-plugin-eslint';

import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import autoprefixer  from 'autoprefixer'
import json from 'rollup-plugin-json';
import url from 'postcss-url'

const BUILD_FIlLE = process.env.BUILD_FIlLE


export default {
  input: [`src/${BUILD_FIlLE}.js`],
  output: {
    file: `./dist/${BUILD_FIlLE}.min.js`,
    format: 'umd',
    name: `fe.${BUILD_FIlLE}`
  },
  plugins: [
    notify(),
    progress(),
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
        // cssnano(),
        url({
          url: 'inline',
        })
      ]
    }),
    resolve({ jsnext: true, main: true, browser: true }),
    commonjs(),
    eslint()
  ]
};