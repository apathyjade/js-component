/*
 * @Author: ApathyJade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2018-06-08 10:12:44
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2018-06-08 10:12:44
 */

import assign from 'lodash/assign'
import template from 'lodash/template'
import html from './index.html'
import style from './index.styl'


// css 动画dom属性
const AttrAnimation = 'aj-fade'

// dom class
const ClassEl = 'aj-toast'

// lodash template 模版
const compiled = template(html)

// 初始化参数
function initOpts (opts) {
  return assign({
    msg: '保存中...',
    type: null,
    autoClose: true,
    autoCloseTime: 3000,
    animateTime: 500,
    style,
    event: {}
  }, opts)
}

// 初始化dom
function initEl ({msg, style, type}) {
  let el = document.createElement('div')
  el.className = style[ClassEl]
  el.setAttribute(AttrAnimation, 'fadeIn')
  el.innerHTML =  compiled({msg, type, style})
  document.querySelector('body').appendChild(el)
  return el
}

// dom删除
function removeEl (el) {
  try {
    el && el.parentNode.removeChild(el)
  } catch (e) {}
}

class Toast {
  constructor (opts) {
    this.opts = initOpts(opts)
    this.el = initEl(this.opts)

    setTimeout (() => {
      this.el.removeAttribute(AttrAnimation)
    }, 0)
    // 自动隐藏
    if (this.opts.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.opts.autoCloseTime)
    }
  }
  emit (type) {
    typeof this.opts.event[type] === 'function' && this.opts.event[type]()
  }
  close () {
    try {
      this.el.setAttribute(AttrAnimation, 'fadeOut')
      setTimeout(() => {
        this.emit('close')
        this.destroy()
      }, this.opts.animateTime)
    } catch (error) {
      this.destroy()
    }
  }
  destroy () {
    try {
      this.el && removeEl(this.el)
      this.el = null
    } catch (e) {}
  }
}

export default Toast
