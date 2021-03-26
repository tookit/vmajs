<template>
  <v-sheet class="mb-9 v-example" outlined>
    <v-lazy min-height="52" @mouseenter="importTemplate">
      <div class="text-end pa-2">
        <v-btn icon @click="expand = !expand">
          <v-icon>mdi-code-tags</v-icon>
        </v-btn>
        <v-btn icon @click="expand = !expand">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </div>
    </v-lazy>
    <v-divider />
    <div v-if="pen">
      <v-expand-transition>
        <div v-show="expand">
          <v-tabs class="route-tab border-bottom" v-model="defaultTab">
            <v-tab v-for="section in sections" :key="section" :href="'#' + section">
              {{ section }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="defaultTab">
            <template v-for="section in sections">
              <v-tab-item :key="section" :value="section">
                <v-markup :code="pen[section]" />
              </v-tab-item>
            </template>
          </v-tabs-items>
          <v-divider />
        </div>
      </v-expand-transition>
    </div>
    <!--  -->
    <v-sheet class="pa-8">
      <div style="max-width: 600px; margin: 0 auto">
        <vue-file :file="file" @error="hasError = true" />
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
// Mixins
import Codepen from './mixins/codepen'
import VueFile from './VueFile'
import VMarkup from './VMarkup'
export default {
  name: 'VExample',
  components: {
    VueFile,
    VMarkup,
  },
  mixins: [Codepen],
  props: { file: String },
  data: () => ({
    defaultTab: 'template',
    dark: false,
    expand: false,
    hasError: false,
    selected: 'template',
  }),

  computed: {
    sections() {
      return ['template', 'script', 'style'].filter((section) => this.pen[section])
    },
    tooltips() {
      return [
        {
          icon: '$mdiInvertColors',
          path: 'invert-example-colors',
          onClick: () => (this.dark = !this.dark),
        },
        {
          icon: '$mdiCodepen',
          path: 'edit-in-codepen',
          onClick: this.sendToCodepen,
        },
        {
          icon: '$mdiGithub',
          path: 'view-in-github',
          href: `https://github.com/vuetifyjs/vuetify/tree/${this.branch}/packages/docs/src/examples/${this.file}.vue`,
          onClick: () => {},
        },
        {
          icon: '$mdiCodeTags',
          path: 'view-source',
          onClick: () => (this.expand = !this.expand),
        },
      ]
    },
  },
}
</script>

<style lang="sass">
.v-example
  code[class*="language-"],
  pre[class*="language-"]
    text-shadow: none

  pre.language-markup::after
    content: 'vue'
</style>
