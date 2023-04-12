<template>
  <div>
    <v-card class="mx-auto teste">
      <v-card-title class="d-flex">
        <span class="docName">{{ document.name }}</span>

        <v-spacer></v-spacer>
        <v-btn
          style="color: #5d8d49"
          variant="text"
          :icon="mark ? 'mdi-star markedStar' : 'mdi-star-outline'"
          @click="toggleMark"
        ></v-btn>
      </v-card-title>

      <v-card-actions style="color: white" class="actions">
        <v-btn
          :icon="show ? 'mdi-tooltip-question-outline' : 'mdi-tooltip-question'"
          @click="toggleShow"
        ></v-btn>
        <v-btn icon="mdi-message-text"></v-btn>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-arrow-down-bold-box"></v-btn>
        <v-btn icon="mdi-folder-multiple-plus"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="d-flex">
            <span>
              <h4>O que é isso?</h4>
              {{ document.description }}</span
            >
            <span>
              <h4>Onde conseguir?</h4>
              {{ document.whereToGet }}</span
            >
            <br />
            <span>
              <h4>Responsabilidade?</h4>
              {{ document.reponsability }}</span
            >
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      mark: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    toggleMark() {
      this.mark = !this.mark;
    },
  },
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.teste {
  max-width: 700px;
  margin-top: 7em;
}

.markedStar {
  color: rgb(199, 199, 1);
}

.v-card-title {
  font-size: 10px;
}

.actions {
  background: #5d8d49 !important;
}

.docName {
  font-size: 14px;
}
</style>