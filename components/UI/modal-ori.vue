<template>
  <div>
    <button v-bind:style="size" v-if="!$store.state.login" v-on:click="modal = !modal">login</button>
    {{modal}}
    <div class="modal-container" :class="{active: modal}" @click="handleModalClick">
      <div class="child">
        <div :ref="'modal' + _uid" class="modal-box">
          <slot></slot>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      height: {type: String, default () { return '80px' }},
      width: {type: String, default () { return '80px' }}
    },
    data () {
      return {
        modal: false,
        size: {
          height: '80px',
          width: '80px'
        }
      }
    },
    mounted () {
      console.log("this.height" + this.width)
      this.$on('modalChange', (modal) => {
        console.log("taking modal : " + modal)
        this.modal = modal
      })
    },
    methods: {
      handleModalClick (e) {
        console.log("modalClick")
        console.log(e)       
        console.log("taking modal : " + this.modal) 
        if (!this.$refs['modal' + this._uid].contains(e.target)) {
          this.modal = false
        }
      }
    }
  }
</script>
<style>
  .modal-container {
    position: fixed;
    top:-80px;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
    opacity: 0;
    transition: 0.3s;
  }
  
  .modal-container .child {
    display: flex;
    height: 100vh;
  }
  
  .modal-container.active {
    z-index: 10;
    opacity: 1;
  }
  
  .modal-box {
    margin: auto;
    z-index: 3000;
    min-width: 300px;
    min-height: 200px;
    background: white;
    transition: 0.3s;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.4);
    transform: translate(0, 30);
  }
  
  .modal-container.active .modal-box {
    transform: translate(0, 0);
  }

</style>