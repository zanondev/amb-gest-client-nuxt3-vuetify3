<template>
  <card-default :clientInfo="clientInfo">
    <customer-client-jobs :jobs="jobs" />
  </card-default>
</template>

<script>
import CardDefault from "~~/components/CardDefault.vue";
import CustomerClientJobs from "~~/components/CustomerClientJobsTable.vue";

export default {
  components: {
    CustomerClientJobs,
    CardDefault,
  },
  data() {
    return {
      jobs: [
        {
          activity: '00.10.00 - Lavra a céu aberto com desmonte por explosivo.',
          licensingType: 'LAP',
          address: 'Itajaí - SC'
        },
        {
          activity: '00.10.00 - Lavra a céu aberto com desmonte por explosivo.',
          licensingType: 'LAP',
          address: 'Itajaí - SC'
        },
        {
          activity: '00.10.00 - Lavra a céu aberto com desmonte por explosivo.',
          licensingType: 'LAP',
          address: 'Itajaí - SC'
        },
      ],
      clientInfo: {
        name: "John Doe"
      },
    };
  },
};
</script>

<style>

</style>