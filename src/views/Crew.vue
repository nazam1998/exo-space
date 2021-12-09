<template>
  <div class="crew">
    <img
      class="crew-img"
      :src="require('@/assets/crew/background-crew-desktop.jpg')"
      alt=""
    />
    <router-view :key="$route.path" />
    <div class="row justify-content-start btn-section-crew">
      <router-link
        v-for="crew in crews"
        :key="crew.id"
        :to="{ name: 'CrewDetails', params: { crewId: crew.id } }"
        class="col-3 btn-select"
        :class="{
          'current-crew-active': $route.params.crewId == crew.id,
        }"
      ></router-link>
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
      crews: store.crew,
    };
  },
};
</script>
<style scoped>
.crew-img {
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
.select-planet {
  cursor: pointer;
}
.btn-section-crew {
  margin: 0 150px;
}
.btn-select {
  cursor: pointer;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #fff;
  margin: 0 20px;
}
.btn-select:hover {
  background-color: grey;
}
.current-crew-active {
  background-color: grey;
}
</style>
