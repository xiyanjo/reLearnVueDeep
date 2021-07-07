<template>
  <div>
    <component :is="curComponent"></component>
  </div>
</template>
<script>
import imgAbout from "@/components/cssAboutComponents/imgAbout";
export default {
  name: "cssAbout",
  components: { imgAbout },
  data() {
    return {
      curComponent: "imgAbout",
    };
  },
};
</script>
