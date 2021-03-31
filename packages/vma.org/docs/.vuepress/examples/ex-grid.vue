<template>
  <div class="page-grid mt-10">
    <v-card>
      <v-grid  class="v-grid" :items="items" :headers="headers" />
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Task Name',
          value: 'name',
        },
        {
          text: 'Status',
          value: 'status',
          render: (item) => {
            return this.$createElement(
              'v-chip',
              {
                props: {},
              },
              item.status
            )
          },
        },
      ],
      items: [
        {
          id: 1,
          name: 'Laravel',
          status: 'todo',
        },
        {
          id: 2,
          name: 'Vue',
          status: 'inprogress',
        },
        {
          id: 3,
          name: 'Nodejs',
          status: 'done',
        },
      ],
    }
  },
}
</script>
