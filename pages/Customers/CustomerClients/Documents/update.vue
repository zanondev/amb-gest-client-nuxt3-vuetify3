<template>
  <card-default :clientInfo="clientInfo">
    <document-update />
  </card-default>
</template>

<script>
import DocumentUpdate from "~~/components/DocumentUpdate.vue";
import CardDefault from "~~/components/CardDefault.vue";

export default {
    components: {
    DocumentUpdate
  },
    data() {
    return {
      clientInfo: {
        name: 'John Doe',
        activity: "00.10.00 - Lavra a céu aberto com desmonte por explosivo.",
        licencingType: "Licença prévia",
        address: "Itajai - SC",
      },
    };
  },
}
</script>

<style>

</style>