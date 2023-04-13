<template>
<div class="options">
    <v-btn size="small" class="btnAdd"> Adicionar serviço </v-btn>
  </div>
  <v-table
    fixed-header
    height="300px"
    class="jobTable"
  >
    <thead>
      <tr>
        <th class="text-center">
          Descrição/Atividade
        </th>
        <th class="text-center">
          Etapa de Licenciamento
        </th>
        <th class="text-center">
          Local
        </th>
        <th class="text-center">
          Ações
        </th>
        <th class="text-center">
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="job in jobs"
        :key="job.name"
      >
        <td>{{ job.activity }}</td>
        <td class="text-center">{{ job.licensingType }}</td>
        <td class="text-center">{{ job.address }}</td>
         <td class="text-center">
            <v-btn icon="mdi-pencil-circle" class="btnEdit" color="#8B8000" variant="text" @click="editJob(index)"></v-btn>
            <v-btn icon="mdi-delete-circle" class="btnDelete" color="#8B0000" variant="text" @click="deleteJob(index)"></v-btn>
        </td>
        <td>
          <v-btn to="/customers/customerclients/documents/update" class="btnEnter" @click="enterClient(index)"> Entrar </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
  export default {
    props: {
      jobs: {
        type: Array,
        default: () => []
      }
    },
   methods: {
    editJob(index) {
      console.log("Editar job " + index);
    },
    deleteJob(index) {
      console.log("Excluir job " + index);
    },
    enterJob(index) {
      console.log("Enter job " + index);
    }
  }
};
</script>

<style>
.jobTable{
  padding: 10px;
}

.options {
  padding: 10px;
  text-align: left;
}

.btnEnter, .btnAdd  {
  background: #5d8d49;
  color: #ffff;
  text-transform: none;
}

.btnEdit, .btnDelete{
  font-size: 25px!important;
}

</style>