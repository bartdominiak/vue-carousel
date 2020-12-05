<template>
  <component
    :is="tag"
    ref="vsSlide"
    class="vs-carousel__slide"
    tabindex="0"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    /**
     * Custom tag
     */
    tag: {
      type: String,
      default: 'li'
    }
  }
}
</script>
