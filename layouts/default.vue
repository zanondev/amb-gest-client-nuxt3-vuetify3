<template>
  <div>
    <navigation />
    <slot />
  </div>
</template>

<script>
import navigation from "~~/components/Navigation.vue";

export default {
  name: "default",
  components: {
    navigation,
  },
};
</script>

<style>
</style>
