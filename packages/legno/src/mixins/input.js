import { get } from "lodash"

export default {
  props: {
    name: String,
    readonly: Boolean,
    disabled: Boolean,
  },
  inject: {
    form: {
      from: "oForm",
      default: null,
    },
    formField: {
      from: "oField",
      default: null,
    },
  },
  data() {
    return {
      initialData: undefined,
    }
  },
  computed: {
    realName() {
      return get(this.formField, "name", this.name)
    },
    realDisabled() {
      return get(this.formField, "disabled", this.disabled)
    },
    realReadonly() {
      return get(this.formField, "readonly", this.readonly)
    },
  },
  created() {
    if (!this.form || this.formField) {
      return
    }

    this.$emit = this.realEmit.bind(this, this.$emit)
  },
  methods: {
    realEmit(originalEmit, eventName, data, event) {
      originalEmit.apply(this, Array.prototype.slice.call(arguments, 1))
      if (eventName.indexOf("hook:") !== 0 && this.formField.name) {
        this.formField.$emit("interact", eventName, data, event)
      }
    },
  },
}
