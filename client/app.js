import './app.styl';
import Vue from 'Vue';
import app from './components/app.vue';

new Vue({
  el: '#app',
  render: h => h(app)
});

