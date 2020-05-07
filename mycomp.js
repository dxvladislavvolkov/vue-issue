import Vue from 'vue';

const mycomp = Vue.extend( {
  render: function(h) {
    return h('div', {}, this.$slots.default);
  },
  mounted: function() {
    console.log(this.$parent.$el);
  }
});

export {
  mycomp
}

