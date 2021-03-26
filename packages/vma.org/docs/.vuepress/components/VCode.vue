<template>
  <v-sheet
    :color="isDark ? '#1F1F1F' : 'grey lighten-5'"
    :dark="isDark"
    :rounded="rounded"
    class="app-code overflow-hidden"
    dir="ltr"
    outlined
  >
    <slot />
  </v-sheet>
</template>

<script>
export default {
  props: {
    rounded: {
      type: [Boolean, String],
      default: true,
    },
    dark: Boolean,
  },

  computed: {
    isDark() {
      return this.dark
    },
  },

  methods: {
    target() {
      return this.$el.querySelector('pre')
    },
  },
}
</script>
