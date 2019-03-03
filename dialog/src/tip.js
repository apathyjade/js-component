/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-21 14:57:57
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-21 14:57:57
 */
import 'core-js/fn/object/assign'
import 'core-js/fn/object/define-property'

import mixins from './mixins'
import {setDomState} from './u'

/**
 * 初始化配置
 *
 * @param {*} ctx
 * @param {*} options
 */
function initOpts (ctx, options)  {
  let opts = {
    title: '提示',
    msg: '默认内容',
    cls:'',
    type: 'warn', //warn ok error
    showFoot:true,
    showClose : true,
    showCancel: true,
    showConfirm: true,
    confirmBtnText: '确定',
    cancelBtnText: '取消',
    confirmBtnClass:'confirm',
    cancelBtnClass:'cancel',
    colseTime: 500,
    autoDestroy: true,
    confirm () {
    },
    cancel () {
    },
    close () {
    }
  };
  Object.assign(opts, options);
  opts.cls = `${ctx.$style.c} ${opts.cls}`;
  ctx.option = opts;
}


function createDom (ctx) {
  let opts = ctx.option;
  let doc = window.document
  let el = doc.createElement('div');
  ctx.el = el;
  el.className = opts.cls;
  let body = (function createBodyHtml () {
    return `<div class=${ctx.$style.body}>
              <div class="${ctx.$style.tipTitle}">${opts.title}</div>
              <div class="${ctx.$style.tipMsg}">${opts.msg}</div>
            </div>`
  })();
  let foot = (function createFootHtml (){
    if(!opts.showFoot){
      return ``;
    }
    var footHtml ='';
    if(opts.showCancel){
      footHtml += `<button class="${ctx.$style.minorBtn}" data-event="cancel">${opts.cancelBtnText}</button>`;
    }
    if(opts.showConfirm){
      footHtml += `<button class="${ctx.$style.majorBtn}" data-event="confirm">${opts.confirmBtnText}</button>`;
    }
    return `<div class="${ctx.$style.foot}">${footHtml}</div>`;
  })();
  let closeBtnHtml = opts.showClose ? `<span class="${ctx.$style.closeBtn}" data-event="close"></span>` : ``;
  el.innerHTML = `<div class="${ctx.$style.lay}">${closeBtnHtml}${body}${foot}</div>`;
}

class Tip extends mixins {
  initCfg (opts) {
    initOpts(this, opts);
  }
  createDom () {
    createDom(this);
  }
};
export default Tip
