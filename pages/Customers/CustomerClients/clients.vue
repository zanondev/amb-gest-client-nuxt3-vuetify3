<template>
  <card-default :clientInfo="clientInfo">
    <customer-clients :clients="clients" />
  </card-default>
</template>

<script>
import CardDefault from "~~/components/CardDefault.vue";
import CustomerClients from "~~/components/CustomerClientsTable.vue";

export default {
  components: {
    CustomerClients,
    CardDefault,
  },
  data() {
    return {
      clients: [
        {
          name: "John Doe",
          email: "email@email.com",
          phone: "21 9765-9575",
        },
        {
          name: "Jane Doe",
          email: "email@email.com",
          phone: "21 9765-9575",
        },
        {
          name: "Diggy Dobdgy Doo",
          email: "email@email.com",
          phone: "21 9765-9575",
        },
      ],
      clientInfo: {
        name: "Clientes disponíveis"
      },
    };
  },
};
</script>

<style>
</style>