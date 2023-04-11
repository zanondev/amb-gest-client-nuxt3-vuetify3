<template>
  <div>
    <v-card class="mx-auto teste">
      <v-card-title class="d-flex">
        <h3>Cadastro Nacional da Pessoa Jurídica - CNPJ ou Cadastro Pessoa Física -
        CPF (Cópia)</h3> 
        <v-spacer></v-spacer>
         <v-btn style="color:#5d8d49" icon="mdi-star-outline" variant="text"></v-btn>
      </v-card-title>

      <v-card-actions style="color:white" class="actions">
        <v-btn
          :icon="show ? 'mdi-tooltip-question-outline' : 'mdi-tooltip-question'"
          @click="show = !show"
        ></v-btn>
        <v-btn icon="mdi-message-text"></v-btn>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-arrow-down-bold-box"></v-btn>
        <v-btn icon="mdi-folder-multiple-plus"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p> <h4>O que é isso?</h4> 
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape. </p>
            <br>
            <p> <h4>Onde conseguir?</h4> 
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.</p>
            <br>
            <p> <h4>De quem é a responsabilidade?</h4> 
            Do cliente.</p>
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
  font-size: 10px;
}

.actions {
  background: #5d8d49 !important;
}
</style>