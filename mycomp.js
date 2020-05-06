import Vue from 'vue';
const mycomp = Vue.component('my-comp', {
  render: function(h) {
    return h('div', {}, this.$slots.default);
  },
  mounted: function() {
    console.log(this.$parent.$el);
  }
});

export { mycomp };

