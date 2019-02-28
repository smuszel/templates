import App from './App';
import Vue from 'vue';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    template: '<App />',
    components: { App },
    el: root
})