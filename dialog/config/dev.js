/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-26 19:47:10
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-26 19:47:10
 */

import base from './base'
import _ from 'lodash'
import serve from 'rollup-plugin-serve'
const BUILD_FIlLE = process.env.BUILD_FIlLE
export default _.merge(base, {
  output: {
    file: `./test/${BUILD_FIlLE}.min.js`,
    format: 'umd',
    name: `fe.${BUILD_FIlLE}`
  },
  plugins: [
    serve('test')
  ]
})

