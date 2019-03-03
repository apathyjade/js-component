/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-26 19:47:10
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-26 19:47:10
 */

import base from './base'
import _ from 'lodash'
import {uglify} from 'rollup-plugin-uglify';
import cssnano from 'cssnano';

export default _.merge({
  plugins: [
    uglify(),
    cssnano()
  ]
}, base)
