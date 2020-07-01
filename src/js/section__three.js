let content = require('./array').items,
    item_card = require('./item-card');

let section__three = new Vue({
    data: {
        elements: content
    },
    components: {
        item_card
    },
    beforeCreate: function() {
        content.sort(function compareRandom() {
            return Math.random() - 0.5;
        });
    }
    
    
}).$mount('.section__three');