import Vue from 'vue';
const mycomp2 = Vue.component('my-comp2', {
  render: function(h) {
    return h('div', {}, this.$slots.default);
  },
  mounted: function() {
  }
});

export {mycomp2};