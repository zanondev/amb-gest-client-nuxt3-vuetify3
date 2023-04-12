<template>
  <div>
    <v-card width="400" class="mx-auto card-login">
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
        <v-checkbox label="Lembrar de mim"></v-checkbox>
        <v-btn
          style="background: #5d8d49; color: #ffff"
          type="submit"
          block
          class=""
          >Login</v-btn
        >
        <nuxt-link to="/login" class="d-flex justify-center forgotPass"
          >Esqueceu a senha?</nuxt-link
        >
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>

.card-login {
  padding: 1em;
  background: #fff;
  width: auto;
  height: auto;
}

.forgotPass {
  font-size: 13px;
  color: default;
  padding-top: 0.7em;
}
</style>