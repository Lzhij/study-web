function typeColor(v) {
  return ` my-button-${v}`
}

export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  render(h) {
    return h('button', {
      class: `my_button${typeColor(this.type)}`,
      on: {
        click: () => {
          this.$emit('click')
        }
      }
    }, this.$slots.default)
  }
}
