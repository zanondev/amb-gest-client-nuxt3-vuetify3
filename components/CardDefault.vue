<template>
  <v-card class="central-card mx-auto">
    <div class="clientInfo">
      <div v-for="(value, key) in clientInfo" :key="key">
      <p>{{ value }}</p>
    </div>
    </div>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    clientInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.central-card {
  background: #ffff;
  width: 70em;
}

.clientInfo {
  background: #f3f3f3;
  padding: 10px;
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  color: #43792c;
  text-align: center;
}
</style>