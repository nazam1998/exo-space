<template>
  <div class="row">
    <div class="col-6">
      <h2 class="mb-5">01 Pick your destination</h2>
      <img :src="require('@/assets' + destination.images.png)" alt="" />
    </div>
    <div class="col-6">
      <div class="text-section w-75 my-5">
        <h1 class="my-5">{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
      </div>
      <div class="row">
        <div class="col-4">
          AVG. Distance
          <p>{{ destination.distance }}</p>
        </div>
        <div class="col-4">
          EST. Travel Time
          <p>{{ destination.travel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "DestinationDetails",
  data() {
    return {
      destinations: store.destinations,
    };
  },
  props: {
    destinationId: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    destination: function () {
      return store.destinations.find(
        (destination) => destination.id == this.destinationId
      );
    },
  },
};
</script>
<style>
</style>