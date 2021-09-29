<template>
  <component :is="type" class="link" v-bind="linkProps(to)">
    <slot />
  </component>

</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() {
      return this.isExternalLink(this.to)
    },
    type() {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    },
    isExternalLink(path) {
      return /^(https?:|mailto:|tel:|link:)/.test(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
</style>
