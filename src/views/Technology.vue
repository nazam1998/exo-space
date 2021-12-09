<template>
  <div class="technology overflow-hidden">
    <img
      class="technology-img"
      :src="require('@/assets/technology/background-technology-desktop.jpg')"
      alt=""
    />
    <div class="section-technology">
      <div class="row">
        <div class="col-6">
          <h2>03 Space Launch 101</h2>
          <div class="row justify-content-center mt-5">
            <div class="col-6 mx-auto text-center">
              <div
                v-for="(techno, index) in technology"
                :key="index"
                class="select-planet"
                :class="{ 'current-active': current == index }"
                @click="current = index"
              >
                <p>{{ index }}</p>
              </div>
            </div>
            <div class="col-6">
              <p>{{ technology[current].description }}</p>
            </div>
          </div>
        </div>
        <div class="col-6 img-fluid current-techno-img">
          <img
            :src="require('@/assets' + technology[current].images.portrait)"
            alt=""
          />
        </div>
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
      current: 0,
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
  margin-top: 200px;
  color: white;
}
.select-planet {
  cursor: pointer;
  margin: 10px auto;
  height: 50px;
  width: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.select-planet p {
  margin-top: 10px;
}
.current-active {
  background: white;
  color: black;
}
</style>
