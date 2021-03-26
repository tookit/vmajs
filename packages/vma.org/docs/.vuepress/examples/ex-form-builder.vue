<template>
  <v-form-builder
    ref="builder"
    v-model="formModel"
    :title="formTitle"
    :items="formItems"
    :loading="loading"
    color="primary"
    show-header
    @form:submit="handleSubmit"
    @form:cancel="$emit('form:cancel')"
  />
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      loading: false,
      formModel: {},
    }
  },
  computed: {
    formTitle() {
      return this.item ? 'Edit User - ' + this.item.username : 'Create User'
    },
    formItems() {
      return [
        {
          cols: 6,
          element: 'v-text-field',
          props: {
            name: 'username',
            required: true,
            outlined: true,
            rules: [(v) => !!v || 'Username is required'],
          },
        },
        {
          cols: 6,
          element: 'v-select',
          props: {
            name: 'gender',
            items: ['female', 'male'],
            required: true,
            outlined: true,
          },
        },
        {
          cols: 6,
          element: 'v-select',
          props: {
            name: 'email',
            outlined: true,
          },
        },
        {
          cols: 6,
          element: 'v-text-field',
          props: {
            name: 'password',
            outlined: true,
          },
        },
        {
          cols: 6,
          element: 'v-text-field',
          props: {
            name: 'password_confirmation',
            items: this.countires,
            outlined: true,
          },
        },
        {
          cols: 6,
          element: 'v-switch',
          props: {
            name: 'Active',
            outlined: true,
          },
        },
      ]
    },
  },
  watch: {
    item: {
      handler(item) {
        this.formModel = item || {}
      },
      immediate: true,
    },
  },
  methods: {
    handleSubmit() {

    },

  },
}
</script>
