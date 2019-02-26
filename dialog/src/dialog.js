/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-21 14:57:57
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-21 14:57:57
 */
import 'core-js/fn/object/assign'
import 'core-js/fn/object/define-property'
import style from './dialog.styl'

/**
 * 初始化配置
 *
 * @param {*} ctx
 * @param {*} options
 */
function initOpts (ctx, options)  {
  let opts = {
    msg: '默认内容',
    title: '提示',
    cls:'',
    showHead:true,
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
  opts.cls = `${style.c} ${opts.cls}`;
  ctx.option = opts;
}
/**
 * 初始化组件dom
 *
 * @param {*} ctx
 */
function initDom (ctx) {
  let opts = ctx.option;
  let doc = window.document
  let el = doc.createElement('div');
  ctx.el = el;
  el.className = opts.cls;

  let head = (function(){
    if(!opts.showHead){
      return ``;
    }
    return `<div class="${style.head}">${opts.title}</div>`;
  })();

  let body = `<div class=${style.body}>${opts.msg}</div>`

  let foot = (function(){
    if(!opts.showFoot){
      return ``;
    }
    var footHtml ='';
    if(opts.showCancel){
      footHtml += `<button class="${style.minorBtn}" data-event="cancel">${opts.cancelBtnText}</button>`;
    }
    if(opts.showConfirm){
      footHtml += `<button class="${style.majorBtn}" data-event="confirm">${opts.confirmBtnText}</button>`;
    }
    return `<div class="${style.foot}">${footHtml}</div>`;
  })();

  let closeBtnHtml = opts.showClose ? `<span class="${style.closeBtn}" data-event="close"></span>` : ``;
  el.innerHTML = `<div class="${style.lay}">${closeBtnHtml}${head}${body}${foot}</div>`;
  setState(ctx, 'close')
  ctx.show();
  doc.querySelector('body').appendChild(el);
}
/**
 * 初始化组件事件
 *
 * @param {*} ctx
 */
function initEvent (ctx) {
  ctx.el.addEventListener('click', (ev) => {
    var dataType = ev.target.getAttribute("data-event");
    if(!dataType){
      return this;
    }
    let fn = ctx.option[dataType];
    let isStopClose = false;

    let stopClose = () => {
      isStopClose = true;
    }

    typeof fn === 'function' && fn.call(ctx, dataType, stopClose, ctx.close);
    stopClose = null;
    fn = null;
    !isStopClose && ctx.close();
  });
}
/**
 * 设置动画css dom属性
 * 
 * @param {*} ctx
 */
function setState (ctx, state) {
  ctx.el.setAttribute('data-state', state);
}

class Dialog {
  constructor () {
    initOpts(this, arguments);
    initDom(this);
    initEvent(this);
  }
  show () {
    this.el.style.display = 'block';
    setTimeout(()=>{
      setState(this, 'opening');
      setTimeout(() => {
        setState(this, 'open');
      }, this.option.colseTime)
    }, 0);
  }
  close () {
    setState(this, 'closing');
    setTimeout(()=>{
      this.el.style.display = 'none';
      setState(this, 'close');
      this.autoDestroy && this.distroy(this);
    }, this.option.colseTime)
  }
  destroy () {
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
      this.el = null
    }
  }
};
export default Dialog
