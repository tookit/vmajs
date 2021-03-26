<template>
  <v-code class="my-0" v-bind="$attrs">
    <v-prism ref="code" :code="code" :inline="inline" :lang="lang" />
  </v-code>
</template>

<script>
// Imports


// Components
import VPrism from './VPrism'
import VCode from './VCode'

export default {
  name: 'Markup',
  components: { VPrism, VCode },
  props: {
    code: String,
    inline: Boolean,
    lang: String,
  },
}
</script>
