<template>
  <div class="container mt-8" style="width: 500px; margin-top: 60px">
    <div class="title">NUXT 3 Supabase Ionic Capacitor</div>
    <form class="box">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alex@example.com"
            v-model="credentials.email"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="********"
            v-model="credentials.password"
          />
        </div>
      </div>

      <button class="button is-primary" @click="doLogin">SIGN IN</button>
    </form>
    <template v-if="errorMessage">
      <div class="notification is-danger">
        <button class="delete" @click="errorMessage=null"></button>
        {{ errorMessage }}
      </div></template
    >
  </div>
</template>

<script setup lang="ts">
const credentials = ref({ email: "", password: "" });
const errorMessage = ref<string | null>(null);

const supabase = useSupabase();
const doLogin = async (event: any) => {
  event.preventDefault();
  console.log(credentials.value?.email);
  const { user, session, error } = await supabase.auth.signIn({
    email: "example@email.com",
    password: "example-password",
  });
  if (error) {
    errorMessage.value = error.message;
  } else {
    errorMessage.value = null;
  }
};
</script>
