<template>
<nav class="upper-bar-con">
  <div class="main-menu">
    <div class="search-bar">
      <input-field></input-field>
    </div>
    <div class="menu-a">
        <nuxt-link class="menu" v-for="(menu, idx) in menus" :key="idx" :class="{active: active(idx)}" :to="menu.url">
            <div class="menubtn" @click="changeAct(idx)">{{menu.name}}</div>
        </nuxt-link>
    </div>
  </div>
  <div class="result-bar"></div>
</nav>
</template>
<script>
import InputField from '~/components/UI/form/input-field.vue'

export default {
  data () {
    return {
      search: '',
      menus: 
        [
          {
            name: 'HOME', 
            url: '/',
            act: true
          },
          {
            name: 'TEAM',
            url: '/team',
            act: false
          },
          {
            name: 'PLAYER',
            url: '/player',
            act: false
          },
          {
            name: 'B.Lab',
            url: '/blab',
            act: false
          }
        ]
    }
  },
  components : {
    InputField
  },
  methods: {
    active (idx) {
      return this.menus[idx].act 
    },
    changeAct (idx) {
      this.menus.forEach(element => {
        element.act = false
      });
      this.menus[idx].act = true
      console.log(this.menus)
    }
  }
}
</script>
<style>
.upper-bar-con {
  position: absolute;
  z-index: 3;
  padding : 0px 240px 0px 200px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color : #ecf0f1;
}
.main-menu .logo-bar {
  padding : 0px 10px 0px 10px;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-content: center;
}
.upper-bar-con .main-menu {
  width: 100%;
  display: flex;
}
.upper-bar-con .main-menu .search-bar {
  display: flex;
  align-items: center;
}
.upper-bar-con .menu-bar {
  flex-grow: 3;
}
.main-menu .logo-bar h1 {
  color: #bdc3c7;
}
.main-menu .menu-a {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 5;
  padding-top: 5px;
  justify-content: space-around;
}
.main-menu .menu-a .menu{
  text-align: center;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: cubic-bezier(1, 0, 0, 1);
  border-bottom: 2px solid #ecf0f1;
  text-decoration: none;
  color: #bdc3c7;
}
.main-menu .menu-a .menu.active{
  transition: cubic-bezier(1, 0, 0, 1);
  border-bottom: 2px solid #3498db;
}
.menu .menubtn {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upper-bar-result {
  
  color: blue;
}
</style>
