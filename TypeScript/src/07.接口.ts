export {}

// 接口用来约束一个对象的结构
// 表示这个对象必须要有 title 属性和 content 属性  且必须是字符串类型
interface post {
  title: string
  content: string
  subTitle?: string // 当接口键名后面带上一个 ? 号则表示  属性是可选项  可有可无
  readonly center: string // 接口键名前带上 readonly 表示这个属性是只读属性  无法重写
  [key: string]: any // 这个表示其他键名随意  可有可无  
}

// function point(data: post) {
//   console.log(data.title)
//   console.log(data.content)
// }
// point({ title: 'Hello TypeScript', content: 'my name is typescript' })


const obj: post = {
  title: '123',
  content: '5962',
  center: '852'
}
// obj.center = '15'
