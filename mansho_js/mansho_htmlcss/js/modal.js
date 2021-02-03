Vue.use(window["vue-js-modal"].default);
const vue = new Vue({
  el: "#app",
  methods: {
      showModal(){
          this.$modal.show('user-modal');
      },
  },
})