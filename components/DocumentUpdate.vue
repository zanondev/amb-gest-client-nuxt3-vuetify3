<template>
  <div class="mx-auto teste">
    <div class="d-flex" v-for="(combobox, index) in comboboxes" :key="index">
      <v-combobox
        label="Selecione"
        :items="documentOptions"
        variant="solo"
        density="compact"
        class="combobox"
        v-model="combobox.selectedDocument"
      ></v-combobox>
      <v-btn
        icon="mdi-close-circle"
        variant="text"
        class="btnRemove"
        @click="removeCombobox(index)"
      ></v-btn>
    </div>
    <div>
      <v-btn
        size="x-large"
        class="btnAdd "
        icon="mdi-plus-circle-outline"
        variant="text"
        @click="addCombobox"
      ></v-btn>
      <v-text class="d-block pa-3" v-if="comboboxes.length == 0">
        Adicione um item
      </v-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comboboxes: [{ selectedDocument: null }],
      documentOptions: [
        "Documento 1",
        "Documento 2",
        "Documento 3",
        "Documento 4",
      ],
    };
  },
  methods: {
    addCombobox() {
      this.comboboxes.push({ selectedDocument: null });
    },
    removeCombobox(index) {
      this.comboboxes.splice(index, 1);
    },
  },
};
</script>

<style>
.teste {
  margin-top: 7em;
  padding-left: 15em;
  padding-right: 15em;
  text-align: center;
}

.btnRemove {
  color: rgb(226, 17, 17);
}

.btnAdd {
  color: rgb(158, 158, 158);
  font-size: 50px;
}
</style>