<template>
<div class="card-login"> 
  <v-sheet width="300"  class="mx-auto mt-auto">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        :rules="rules"
        label="Usuário"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules"
        label="Senha"
      ></v-text-field>
      <v-btn type="submit" block class="">Login</v-btn>
    </v-form>
  </v-sheet>
  </div> 
</template>

<script>
export default {};
</script>

<style>
.card-login{
  padding-top: 10em;
}
</style>