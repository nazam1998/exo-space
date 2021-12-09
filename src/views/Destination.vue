<template>
  <div class="destination">
    <img
      class="destination-img"
      :src="require('@/assets/destination/background-destination-desktop.jpg')"
      alt=""
    />
    <div class="section-destination">
      <div class="row justify-content-end">
        <div class="col-7">
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { destinationId: elem.id },
            }"
            v-for="elem in destinations"
            :key="elem.id"
            class="col-1 select-planet"
            :class="{
              'current-planet': $route.params.destinationId == elem.id,
            }"
            >{{ elem.name }}</router-link
          >
        </div>
      </div>
      <router-view :key="$route.path"></router-view>
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
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
.current-planet {
  border-bottom: 1px solid white;
}
.current-planet {
}
</style>
