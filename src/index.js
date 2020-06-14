// Polyfill: SmoothScroll
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()

import Carousel from './components/Carousel.vue'
import Slide from './components/Slide.vue'

const install = Vue => {
  Vue.component('carousel', Carousel)
  Vue.component('slide', Slide)
}

export default {
  install
}

export { Carousel, Slide }
