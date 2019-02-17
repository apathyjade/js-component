# m-toast

wap原生toast组件

## 说明

基于移动端自适应方案 flexible，画板750px 比例 100:1， 即屏宽 750px: 7.5rem、 字体 32px:.32rem;

## install

```shell
  npm install m-toast-aj --save
```

## use

```javascript

  import Toast from 'm-toast-aj'

  let ins = new Toast({
    msg: '加载中...',
    // 只支持loading
    type: null,
    // 是否自动隐藏tosat
    autoClose: true,
    // 自动隐藏事件
    autoCloseTime: 3000,
    // css动画事件 目的控制 dom 销毁 新定义style 动画时使用
    animateTime: 500,
    // css module
    style,
    // 事件只有close事件
    event: {
      close () {
        console.log('Event Hide')
      }
    }
  })

  // methods close、destroy
  ins.close()
  ins.destroy()


```