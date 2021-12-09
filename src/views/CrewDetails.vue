<template>
  <div class="section-crew">
    <div class="row">
      <div class="col-6">
        <h2>02 Meet your crew</h2>
        <div class="text-section w-75 m-5">
          <h2 class="my-5 text-muted">{{ crew.role }}</h2>
          <h1 class="my-5">{{ crew.name }}</h1>
          <p>{{ crew.bio }}</p>
        </div>
      </div>
      <div class="col-6">
        <img
          class="img-fluid img-crew-person"
          :src="require('@/assets' + crew.images.png)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "CrewDetails",
  data() {
    return {
      crews: store.crew,
    };
  },
  props: {
    crewId: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    crew: function () {
      return store.crew.find((crew) => crew.id == this.crewId);
    },
  },
};
</script>
<style scoped>
.section-crew {
  margin-top: 200px;
  color: white;
}
.img-crew-person {
  position: relative;
  height: 450px;
  top: 50px;
}
</style>