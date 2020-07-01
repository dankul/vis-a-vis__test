var list_item = require('./list-item');

Vue.component('item-card', {
  props: ['content'],
  template: '<div class="section__three--item"> ' +
    '<span> </span> ' +
    '<h3 class="title title--small">{{ content.title }}</h3> ' +
    '<p>{{content.text}}</p> ' +
    '<ul>' +
    '<list-item v-for="item in content.list" v-bind:item="item" />' +
    '</ul>' +
    '</div>',
  components: {
    list_item
  }
});