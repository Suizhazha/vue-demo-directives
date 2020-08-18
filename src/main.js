import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false

new Vue({

  template:`
  <div>
  <button v-on2:click = 'hi'>点我</button>
</div>
  `,
  methods:{
    hi(){
      console.log('hi')
    }
  }
}).$mount('#app')
