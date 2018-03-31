<template>
  <div class="input-box" :style="styleObj" :class="{active: isFocus}">
    <label :style="{color: color}" class="input-label" :class="{labelUp: labelUp(this)}" :for="_uid + 'input-box'">{{ label }}</label>
    <!-- <input :style="{color: color}" :id="_uid+'input-box'" class="input-form" :type="type" @focus="isFocus=true" @blur="isFocus=false" @input="v => this.cValue = v.target.value" @change="v => this.cValue = v.target.value"> -->
    <input :style="{color: color}" :id="_uid+'input-box'" class="input-form" :type="type" @focus="isFocus=true" @blur="isFocus=false" v-model="cValue">
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
    },
    styleObj () {
      let obj = {
        '--color' : this.color
      }
      return obj
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
    },
    color: {
      type: String,
      defulat () {
        return '#FFFF'
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
  --color: #FFFF;
  margin: 10px 10px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #ccc;
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 0;
    transition: 0.3s;
    transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    left: 50%;
    border-bottom: solid 1px var(--color);
  }
}
.input-box .input-form {
  width: 100%;
  padding: 0px 5px 3px 5px;
  background-color: inherit;
  margin: 0;
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
  opacity: 0.5;
  font-size: 10px;
  position: relative;
  padding-left: 5px;
  bottom: -15px;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}
.input-label.labelUp{
  bottom:0px;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}
</style>
