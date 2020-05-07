import Vue from 'vue';

const mycomp2 = Vue.extend({
  render: function(h) {
    return h('div', {}, this.$slots.default);
  },
  mounted: function() {
  }
});
export {
  mycomp2
}