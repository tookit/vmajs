import Vue from 'vue' // Utils

import { getObjectValueByPath } from 'vuetify/lib/util/helpers'
export default Vue.extend({
  functional: true,
  props: {
    headers: Array,
    index: Number,
    item: Object,
    rtl: Boolean,
  },

  render(h, { props, slots, data }) {
    const computedSlots = slots()
    const columns = props.headers.map((header) => {
      const children = []
      const value = getObjectValueByPath(props.item, header.value)
      const render = header.render
      const slotName = header.value
      const scopedSlot = data.scopedSlots && data.scopedSlots[slotName]
      const regularSlot = computedSlots[slotName]

      if (scopedSlot) {
        children.push(
          scopedSlot({
            item: props.item,
            isMobile: false,
            header,
            index: props.index,
            value,
          })
        )
      } else if (regularSlot) {
        children.push(regularSlot)
      } else if (render && typeof render === 'function') {
        children.push(render.call(this, props.item))
      } else {
        children.push(value == null ? value : String(value))
      }

      const textAlign = `text-${header.align || 'start'}`
      return h(
        'td',
        {
          class: [
            textAlign,
            header.cellClass,
            {
              'v-data-table__divider': header.divider,
            },
          ],
        },
        children
      )
    })
    return h('tr', data, columns)
  },
})
