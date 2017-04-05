import Vue from 'Vue'
import hello from './components/hello.vue';

var app = new Vue({
  el: '#app',
  render: h => h(hello)
});