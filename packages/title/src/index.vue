<template>
  <div class="se-title" :class="'se-title-' + type">
    <span class="title">
      <span v-if="showTitleSpan" class="span"></span>
      <span>
        <slot></slot>
      </span>
    </span>
    <span class="title-icons">
      <slot name="titleIcons">
      </slot>
    </span>
    <span class="icons">
      <slot name="icons"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "se-title",
  componentName: "SeTitle",
  props: {
    type: {
      default: "default",
      type: String,
      require: false,
    },
  },
  computed: {
    showTitleSpan() {
      return this.$slots["default"][0].text || this.$slots["titleIcons"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.se-title {
  width: 100%;
  text-align: left;
  color: $title-color;
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;

  .title {
    font-size: 16px;
    font-weight: 700;
    padding: 0 10px;
    .span {
      display: inline-block;
      width: 6px;
      height: 16px;
      vertical-align: middle;
      background-color: $base-color;
      margin-top: -3px;
      font-size: 16px;
      line-height: 16px;
    }
  }

  .title-icons {
    font-size: 14px;
  }

  .icons {
    text-align: right;
    font-size: 14px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
}
.se-title-default {
  height: 42px;
  .title {
    margin-top: -2px;
  }
}
.se-title-func {
  height: 50px;
  .title {
    margin-top: 4px;
  }
}

.se-title-pop {
  height: 48px;
}
</style>