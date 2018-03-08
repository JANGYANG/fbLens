<template>
  <div class="input-box" :class="{active: isFocus}">
    <label class="input-label" :class="{labelUp: labelUp(this)}" :for="_uid + 'input-box'">{{ label }}</label>
    <input :id="_uid+'input-box'" class="input-form" :type="type" @focus="isFocus=true" @blur="isFocus=false" @input="v => this.cValue = v.target.value" @change="v => this.cValue = v.target.value">
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
    }
  },
  computed: {
    cValue: {
      get () {
        return this.value
      },
      set (value) {
        this.open = false
        this.$emit('input', value)
      }
    }
  },
  props : {
    type: {
      type: String,
      default () {
        return 'text'
      }
    },
    label: {
      type: String,
      default () {
        return ''
      }
    },
    value: {
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  methods : {
    labelUp (e) {
      console.log("input value : "+e.value)
      if(this.isFocus || e.value){
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
.input-box {
  margin: 10px 10px;
  position: relative;
  width: 80%;
  border-bottom: 1px solid #ccc;
}
.input-box .input-form {
  width: 100%;
  padding: 0px 1em 0px 1em;
  background-color: inherit;
  margin: 0;
}
.input-box::after {
  content: '';
  position: absolute;
  bottom: -1px;
  width: 0;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
  left: 50%;
  border-bottom: solid 1px #1565C0;
}

.input-box.active::after {
  width: 100%;
  left: 0;
}
.input-box input {
  border: none;
  outline: none;
}
.input-label {
  font-size: 10px;
  position: relative;
  padding-left: 15px;
  bottom: -10px;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}
.input-label.labelUp{
  bottom:5px;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}
</style>
