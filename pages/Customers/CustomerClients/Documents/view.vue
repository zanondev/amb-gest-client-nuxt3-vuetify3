<template>
  <div>
    <document-view :document="documentInfo"/>
  </div>
</template>

<script>
import DocumentView from "~~/components/DocumentView.vue";
import CardDefault from "~~/components/CardDefault.vue";

export default {
  data() {
    return {
      documentInfo: {
        name: "Cadastro Nacional da Pessoa Jurídica - CNPJ ou Cadastro Pessoa Física - CPF (Cópia)",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum faucibus diam in vestibulum. Fusce tempor ligula nec nunc porttitor, id condimentum purus interdum.',
        whereToGet: 'Pellentesque nec diam ac tortor convallis fringilla vel vel dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        reponsability: 'Lorem ipsum dolor sit ame'
      },
    };
  },
  components: {
    DocumentView,
    CardDefault,
  },
};
</script>

<style>
</style>