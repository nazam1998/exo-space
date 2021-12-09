<template>
  <div class="technology overflow-hidden">
    <img
      class="technology-img"
      :src="require('@/assets/technology/background-technology-desktop.jpg')"
      alt=""
    />
    <div class="section-technology">
      <h2 class="text-start mx-5">03 Space Launch 101</h2>
      <div class="row align-items-center">
        <div class="col-3">
          <div
            class="select-techno"
            v-for="techno in technology"
            :key="techno.id"
            :class="{ 'current-active': $route.params.technoId == techno.id }"
          >
            <router-link
              :to="{
                name: 'TechnologyDetails',
                params: { technoId: techno.id },
              }"
            >
              <p>{{ techno.id }}</p>
            </router-link>
          </div>
        </div>
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
export default {
  name: "Home",
  data() {
    return {
      technology: store.technology,
    };
  },
};
</script>
<style scoped>
.technology-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: -1;
}
.section-technology {
  margin-top: 160px;
  color: white;
}
.select-techno {
  height: 50px;
  border: 1px solid white;
  width: 50px;
  border-radius: 50%;
  margin: auto;
  margin-top: 20px;
  padding-top: 10px;
}
.select-techno a {
  text-decoration: none;
  color: white;
}

.current-active {
  background: white;
  border: none;
}
.current-active a {
  color: black;
}
</style>
