# 组件的 state 和 setState

1. `setState` 方法由父类 `Component` 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 `state` ，并且重新调用 `render` 方法，然后再把 `render` 方法所渲染的最新的内容显示到页面上。