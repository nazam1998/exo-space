<template>
  <div id="app">
    <div id="nav">
      <img :src="require('@/assets/shared/logo.svg')" alt="" />
      <router-link to="/">00 Home</router-link>
      <router-link to="/Destination">01 Destination</router-link>
      <router-link to="/crew">02 Crew</router-link>
      <router-link to="/technology">03 Technology</router-link>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import store from "./store";
export default {
  name: "App",
  data() {
    return {
      destinations: store.destinations,
      crew: store.crew,
      technology: store.technology,
    };
  },
};
</script>
<style>

@import "~bootstrap/dist/css/bootstrap.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
#nav {
  text-transform: uppercase;
  position: absolute;
  top: 30px;
  right: 0;
  padding: 50px 10px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: right;
  z-index: 2;
  backdrop-filter: blur(20px);
}
#nav::before {
  content: "";
  position: absolute;
  left: -600px;
  top: 57px;
  height: 2px;
  width: 80%;
  background-color: #777;
}
#nav img {
  position: absolute;
  left: -700px;
  top: 36px;
}
#nav a {
  margin: 0 40px;
  color: white;
  text-decoration: none;
}
</style>
