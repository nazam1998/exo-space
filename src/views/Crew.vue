<template>
  <div class="crew">
    <img
      class="crew-img"
      :src="require('@/assets/crew/background-crew-desktop.jpg')"
      alt=""
    />
    <div class="section-crew">
      <div class="row">
        <div class="col-6">
          <h2>02 Meet your crew</h2>
          <div class="text-section w-75 m-5">
            <h2 class="my-5 text-muted">{{ crews[current].role }}</h2>
            <h1 class="my-5">{{ crews[current].name }}</h1>
            <p>{{ crews[current].bio }}</p>
            <div class="row justify-content-center">
              <div class="col-3 btn-select" @click="current=0"></div>
              <div class="col-3 btn-select" @click="current=1"></div>
              <div class="col-3 btn-select" @click="current=2"></div>
              <div class="col-3 btn-select" @click="current=3"></div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img
            class="img-fluid img-crew-person"
            :src="require('@/assets' + crews[current].images.png)"
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
.section-crew {
  margin-top: 200px;
  color: white;
}
.select-planet {
  cursor: pointer;
}
.img-crew-person {
  position: relative;
  height: 500px;
}
.btn-select {
  cursor: pointer;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #fff;
  margin: 10px;
}
.btn-select:hover {
    color: grey;
}
</style>
