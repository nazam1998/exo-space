<template>
  <div class="destination">
    <img
      class="destination-img"
      :src="require('@/assets/destination/background-destination-desktop.jpg')"
      alt=""
    />
    <div class="section-destination">
      <div class="row">
        <div class="col-6">
          <h2>01 Pick your destination</h2>
          <img
            :src="require('@/assets' + destinations[current].images.png)"
            alt=""
          />
        </div>
        <div class="col-6">
          <div class="row">
            <span class="col-1 select-planet" @click="current = 0">Moon</span>
            <span class="col-1 select-planet" @click="current = 1">Mars</span>
            <span class="col-1 select-planet" @click="current = 2">Europa</span>
            <span class="col-1 select-planet" @click="current = 3">Titan</span>
          </div>
          <div class="text-section w-75 my-5">
            <h1 class="my-5">{{ destinations[current].name }}</h1>
            <p>{{ destinations[current].description }}</p>
          </div>
          <div class="row">
            <div class="col-4">
              AVG. Distance
              <p>{{ destinations[current].distance }}</p>
            </div>
            <div class="col-4">
              EST. Travel Time
              <p>{{ destinations[current].travel }}</p>
            </div>
          </div>
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
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
.destination-img {
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
.section-destination {
  margin-top: 200px;
  color: white;
}
.select-planet {
  cursor: pointer;
}
</style>
