<template>
  <div class="home">
    <img :src="require('@/assets/home/background-home-desktop.jpg')" alt="" />
    <div class="section-space">
      <div class="text-section">
        <h3>So you want to travel to</h3>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="explore-button">
        <h2>Explore</h2>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.home img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
.section-space .text-section {
  color: white;
  margin: 400px 200px 0;
  text-align: start;
  width: 30%;
}
.explore-button {
  background-color: white;
  border-radius: 50%;
  width: 200px;
  vertical-align: middle;
  height: 200px;
  position: absolute;
  right: 200px;
  bottom: 200px;
}
.explore-button h2 {
  margin-top: 80px;
}
</style>
