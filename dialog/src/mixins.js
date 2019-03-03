/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-28 14:25:08
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-28 14:25:08
 */

import {setDomState, tipNoImplement} from './u'
import style from './dialog.styl'

export default class Base {
  constructor (opts) {
    this.$style = style
    this.initCfg(opts);
    this.initDom();
    this.initEvent();
  }
  initEvent () {
    this.el.addEventListener('click', (ev) => {
      const dataType = ev.target.getAttribute("data-event");
      if(!dataType){
        return this;
      }
      let fn = this.option[dataType];
      let isStopClose = false;
  
      let stopClose = () => {
        isStopClose = true;
      }
  
      typeof fn === 'function' && fn.call(this, dataType, stopClose, this.close);
      stopClose = null;
      fn = null;
      !isStopClose && this.close();
    });
  }
  initCfg () {
    tipNoImplement(this.constructor.name, 'initCfg');
  }
  initDom () {
    this.createDom()
    this.$setType(this.option.type);
    this.$setState('close')
    this.show();
    this.mount();
  }
  createDom () {
    tipNoImplement(this.constructor.name, 'createDom');
  }
  mount () {
    if (!this.el) {
      throw new Error('Instance Has No el')
    }
    document.querySelector(this. container || 'body').appendChild(this.el);
  }
  show () {
    this.el.style.display = 'block';
    setTimeout(()=>{
      setDomState(this.el, 'opening');
      setTimeout(() => {
        setDomState(this.el, 'open');
      }, this.option.colseTime)
    }, 0);
  }
  close () {
    setDomState(this.el, 'closing');
    setTimeout(()=>{
      this.el.style.display = 'none';
      setDomState(this.el, 'close');
      this.option.autoDestroy && this.distroy(this);
    }, this.option.colseTime)
  }
  distroy () {
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
      this.el = null
    }
  }
  $setState (v) {
    this.el.setAttribute('data-state', v);
  }
  $setType (v) {
    this.el.setAttribute('data-type', v);
  }
}