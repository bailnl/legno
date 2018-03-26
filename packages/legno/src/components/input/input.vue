<template>
  <span class="o-input-wrap">
    <input
      ref="input"
      v-model="localValue"
      v-bind="attrs"
      class="o-input"
      v-on="listeners"
      @input="handleInput"
      @keydown.enter="handleEnter"
      @change="$emit('change', $event.target.value, $event)"/>
  </span>
</template>

<script>
import input from "../../mixins/input"

const EVENTS = ["click", "focus", "blur", "keyup", "keydown", "keypress"]

export default {
  name: "o-input",
  mixins: [input],
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    type: {
      type: String,
      default: "text",
      validator(val) {
        return ["text", "password"].includes(val)
      },
    },
    value: {
      type: [String, Number],
      default: "",
    },
    selectOnFocus: {
      type: Boolean,
      default: false,
    },
    composition: {
      type: Boolean,
      default: false,
    },
    onPressEnter: {
      type: Function,
      default() {},
    },
  },
  data() {
    const listeners = EVENTS.reduce(
      (res, type) => ((res[type] = event => this.$emit(type, event)), res),
      {}
    )

    return {
      localValue: this.value,
      listeners,
    }
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        type: this.type,
        name: this.realName,
        disabled: this.realDisabled,
        readonly: this.realReadonly,
      }
    },
  },
  watch: {
    value(val) {
      this.localValue = val
    },
  },
  mounted() {
    if (this.selectOnFocus) {
      this.$on("focus", e => e.target.select())
    }
  },
  methods: {
    handleInput(e) {
      if (this.composition || this.localValue !== this.value) {
        this.$emit("input", e.target.value, e)
      }
    },
    handleEnter(e) {
      this.$emit("enter", e)
    },
    focus() {
      this.$refs.input.focus()
    },
  },
}
</script>
