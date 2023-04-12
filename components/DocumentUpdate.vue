<template>
  <div class="options">
    <v-btn class="btnSave"> Salvar </v-btn>
  </div>

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
        class="btnAdd"
        icon="mdi-plus-circle-outline"
        variant="text"
        @click="addCombobox"
      ></v-btn>
      <span class="d-block pa-3" v-if="comboboxes.length == 0">
        Adicione um item
      </span>
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
      const combobox = this.comboboxes[index];
      if (
        combobox.selectedDocument === null ||
        confirm(
          "Tem certeza que deseja remover este item? Todos os dados históricos serão removidos permanentemente."
        )
      ) {
        this.comboboxes.splice(index, 1);
      }
    },
  },
};
</script>

<style>
.teste {
  margin-top: 20px;
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

.btnSave {
  background: #5d8d49;
  color: #ffff;
}

.options {
  margin-top: 7em;
  padding-right: 18em;
  text-align: right;
}
</style>