import Vue from "vue/dist/vue.js"

Vue.config.productionTip = false

new Vue({
//自定义指令v-on2
  directives: {
    "on2": {
      //bind,inserted都可以
      bind(el, info) {
        console.log(info)
        //通过查看info对象，查找到arg对应的click事件和value对应的hi函数
        el.addEventListener(info.arg, info.value)
      },
      //元素消亡后，回收事件监听
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value)
      }
    }
  },
  template: `
    <button v-on2:click='hi'>点我</button>
  `,
  methods: {

    hi() {
      console.log("hi")
    }
  }
}).$mount("#app")
