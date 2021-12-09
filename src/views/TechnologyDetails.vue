<template lang="">
    <div class="col-8 row justify-content-center mt-5 align-items-center">
            <div class="col-6">
              <p>{{ techno.description }}</p>
            </div>
            <div class="col-6 img-fluid current-techno-img">
              <img
                :src="require('@/assets' + techno.images.portrait)"
                alt=""
              />
            </div>
          </div>
</template>
<script>
import store from "@/store";

export default {
  name: "TechnologyDetails",
  props: {
    technoId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      technology: store.technology,
    };
  },
  computed: {
    techno: function () {
      return store.technology.find((elem) => elem.id == this.technoId);
    },
  },
};
</script>
<style lang="">
</style>