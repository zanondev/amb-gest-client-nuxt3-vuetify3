<template>
  <div>
    <v-card class="mx-auto teste">
      <v-card-title>
        Cadastro Nacional da Pessoa Jurídica - CNPJ ou Cadastro Pessoa Física -
        CPF (Cópia)
      </v-card-title>

      <v-card-actions class="actions">
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-information'"
          @click="show = !show"
        ></v-btn>
        <v-btn icon="mdi-message-text"></v-btn>

        <v-spacer></v-spacer>

        
        <v-btn icon="md:folder_open"></v-btn>
        <v-btn icon="mdi-arrow-down-bold-box-outline"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import documentSetup from "~~/components/DocumentSetup.vue";
import CardDefault from "~~/components/CardDefault.vue";

export default {
  data: () => ({
    show: false,
  }),
  name: "default",
  components: {
    documentSetup,
    CardDefault,
  },
};
</script>

<style>
.teste {
  max-width: 700px;
  margin-top: 7em;
}

.v-card-title {
  font-size: 15px;
}

.actions{
    background: #5D8D49!important;
}
</style>