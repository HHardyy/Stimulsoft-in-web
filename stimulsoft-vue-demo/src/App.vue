<template>
  <div id="app">
    <div id="nav">
      假装是个很好看的切换菜单：
      <router-link to="/">viewer</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link to="/desight">desight</router-link>
    </div>
    <hr/>
    <div style="margin:1em 0;">
      <router-view/>
    </div>
  </div>
</template>
