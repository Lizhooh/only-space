

### only-space
为中文与英文之间保留一个空格，保持美观感。
Keep a space between Chinese and English, keep the sense of beauty.

```bash
npm install --save only-space
```

### use

```js
const onlySpace = require('only-space');

onlySpace(
`
在React 16中，有两种不同的方法实现客户端渲染：render()仅用于渲染客户端内容，hydrate 用于渲染服务器端标记。
由于React是向下兼容的，在React 16中使用render()渲染服务端生成的标记仍旧有效，但是需要使用hydrate()方法来消除警告，为React 17做好准备。
`
);

// output =>
`
在 React 16 中，有两种不同的方法实现客户端渲染：render() 仅用于渲染客户端内容，hydrate 用于渲染服务器端标记。
由于 React 是向下兼容的，在 React 16 中使用 render() 渲染服务端生成的标记仍旧有效，但是需要使用 hydrate() 方法来消除警告，为 React 17 做好准备。
`
```

