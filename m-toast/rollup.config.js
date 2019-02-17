/*
 * @Author: ApathyJade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2018-06-10 14:12:24
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2018-06-10 14:12:24
 */

import config from './config/index'

export default config[process.env.NODE_ENV] ? config[process.env.NODE_ENV] : config.dev
