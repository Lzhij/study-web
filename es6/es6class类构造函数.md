### es5构造函数和es6 Class构造器的区别

1. es5构造函数在原型对象上自行挂载的方法和属性时可枚举的， 而类中的静态方法是不可枚举的

2. 类构造器必须要使用 new 调用 否则会报错  , 而构造函数则不会
3. 类的内部默认开启了严格模式  不需要 'use strict'
4. 类不存在变量提升

#### es5构造函数和es6 Class构造器的相同点

* 都有constructor函数
* 方法中的this都是默认指向的是调用方法的实例对象