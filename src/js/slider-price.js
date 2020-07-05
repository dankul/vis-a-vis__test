import VueSlider from 'vue-slider-component';

new Vue({
  components: {
    VueSlider
  },
  data () {
    return {
      value: 0,
      marks: [0, 500, 1500, 2500, 3500, 4500, 5500, 6500, 7000],
      options: {
        dotSize: 14,
        width: '750px',
        height: 4,
        max: 7000
      }
    };
  }

}).$mount('#slider-price');