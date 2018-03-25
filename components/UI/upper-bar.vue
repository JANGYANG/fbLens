<template>
<nav class="upper-bar-con">
  <div class="flLogo">
    <h1>FootBall LENS</h1>
  </div>
  <div class="main-menu">
    <div class="search-bar">
      <img style="width:13px;height;13px;right:-15px;" src="~/assets/img/search.svg"/>
      <input-field style="display:flex;"></input-field>
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
  position: fixed;
  z-index: 3;
  padding : 0px 240px 0px 0px;
  width: 100%;
  height: 62px;
  display: flex;
  background-color : #FFFFFF;
}
.upper-bar-con .flLogo {
  padding-left: 23px;
  min-width: 195px;
  max-width: 195px;
  height: 62px;
  display: flex;
  align-items: center;
  background-color: #E4F1FD;
}
.upper-bar-con .flLogo h1{
  color: #297FC9;
  font-size: 20px;
}
.upper-bar-con .main-menu {
  width: 100%;
  display: flex;
  background-color: white;
}
.upper-bar-con .main-menu .search-bar {
  padding-left: 15px;
  padding-right: 20px;
  display: flex;
  align-items: center;
}
.upper-bar-con .menu-bar {
  flex-grow: 3;
}
.main-menu .menu-a {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 5;
  padding-top: 5px;
  justify-content: space-between;
}
.main-menu .menu-a .menu{
  width: inherit;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: cubic-bezier(1, 0, 0, 1);
  border-bottom: 3px solid #FFFFFF;
  text-decoration: none;
  color: #989898;
}
.main-menu .menu-a .menu.active{
  transition: cubic-bezier(1, 0, 0, 1);
  border-bottom: 3px solid #3FA9F5;
  color: #3FA9F5;
}
.menu .menubtn {
  height: 100px;
  min-width: 135px;
  max-width: 135px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upper-bar-result {
  
  color: blue;
}
</style>
