<template>
  <div>
    <div class="demo-box">
      <div class="explain">
        基本使用
      </div>
      <ui-input
        v-model="value"
        placeholder="基本使用"
        @enter="enter"></ui-input>
      <div class="console">
        {{ value }}
      </div>
    </div>
    
    <div class="demo-box">
      <div class="explain">
        当foucus时会选中内容
      </div>
      <ui-input
        value="会自动选中内容"
        select-on-focus>
      </ui-input>
    </div>
    <div class="demo-box">
      <div class="explain">
        感知输入法
      </div>
      <ui-input
        v-model="compositionValue"
        composition></ui-input>
      <div class="console">
        {{ compositionValue }}
      </div>
    </div>

    <div class="demo-box">
      <div class="explain">
        disabled
      </div>
      <ui-input
        disabled
        placeholder="禁止"></ui-input>
    </div>
    <div class="demo-box">
      <div class="explain">
        readonly
      </div>
      <ui-input
        readonly
        placeholder="只读"></ui-input>
    </div>
  </div>
</template>
<script>
import { Input } from "legno"
export default {
  components: {
    "ui-input": Input,
  },
  data() {
    return {
      value: "",
      compositionValue: "",
    }
  },
}
</script>
