# render函数的使用

### *什么是render

* Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。

* ```js
  render(h) {
    	// h 接受的是vue创建元素的方法  通常写createElement
      // render 函数需要有返回值  返回的就是组件的渲染dom
      return h('h1', {}, 'Hello World')
  }
  ```

* 上面的代码就会渲染出一个文本节点为Hello World的 h1标签

### *render函数渲染的元素怎么绑定类名、样式、事件

* ```js
  render(h) {
      return h('h1', {
          class: '类名',
          style: { 样式 }，
          on: { click: () => {  } }, // 事件
  		// 同样的在这个里面也可以传入自定义属性
          键: 值
      }, 'Hello World')
  }
  ```

### *怎么获取到props中的属性

* 这个和template模板中是一样的
* 在组件对象中定义props节点
* render函数中通过 this.props中的属性即可

### *render中的插槽

* 默认插槽