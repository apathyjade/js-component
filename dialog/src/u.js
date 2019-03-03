/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-02-28 14:07:08
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-02-28 14:07:08
 */

export function setDomState (el, state) {
  el.setAttribute('data-state', state);
}
export function tipNoImplement (className, fnName) {
  throw new Error(`${className} Does't Implement ${fnName}`);
}