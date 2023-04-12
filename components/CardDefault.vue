<template>
  <v-card class="central-card mx-auto">
    <div class="clientInfo">
      <ul>
        <li>{{ client.name }}</li>
        <li>{{ job.activity }}</li>
        <li>{{ job.licencingType }}</li>
        <li>{{ job.address }}</li>
      </ul>
    </div>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      client: {
        name: "John Doe",
      },
      job: {
        activity: "00.10.00 - Lavra a céu aberto com desmonte por explosivo.",
        licencingType: "Licença prévia",
        address: "Itajai - SC",
      },
    };
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
}
</style>