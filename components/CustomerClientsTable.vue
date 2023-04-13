<template>
  <div class="options">
    <v-btn size="small" class="btnAdd"> Adicionar cliente </v-btn>
  </div>
  <v-table fixed-header height="300px" class="clientTable">
    <thead>
      <tr>
        <th class="text-center">Nome</th>
        <th class="text-center">E-mail</th>
        <th class="text-center">Telefone</th>
        <th class="text-center">Ações</th>
        <th class="text-center"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in clients" :key="client.name">
        <td class="text-center">{{ client.name }}</td>
        <td class="text-center">{{ client.email }}</td>
        <td class="text-center">{{ client.phone }}</td>
        <td class="text-center">
          <v-btn
            icon="mdi-pencil-circle"
            color="#8B8000"
            variant="text"
            @click="editClient(index)"
            class="btnEdit"
          ></v-btn>
          <v-btn
            icon="mdi-delete-circle"
            color="#8B0000"
            variant="text"
            @click="deleteClient(index)"
            class="btnDelete"
          ></v-btn>
        </td>
        <td class="text-center">
          <v-btn class="btnEnter" @click="enterClient(index)"> Entrar </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editClient(index) {
      console.log("Editar job " + index);
    },
    deleteClient(index) {
      console.log("Excluir job " + index);
    },
    enterClient(index) {
      console.log("Enter job " + index);
    },
  },
};
</script>

<style>
.clientTable {
  padding: 10px;
}

.btnEnter, .btnAdd {
  background: #5d8d49;
  color: #ffff;
  text-transform: none;
}

.options {
  padding: 10px;
  text-align: left;
}

.btnEdit, .btnDelete{
  font-size: 25px!important;
}
</style>