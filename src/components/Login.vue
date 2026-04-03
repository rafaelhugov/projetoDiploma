<template>
  <div class="login-container">
    <div class="login-card">
      <header>
        <div class="logo">IPGH</div>
        <h2>Acesso Restrito</h2>
        <p>Por favor, entre com suas credenciais para acessar o gerador.</p>
      </header>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="email@exemplo.com" required>
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="password" placeholder="••••••••" required>
        </div>
        <button type="submit" class="primary-btn">Entrar</button>
      </form>
      <footer>
        &copy; 2026 IPGH - Instituto Paraibano de Genealogia e Heráldica
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login'])

const email = ref('')
const password = ref('')

const submit = () => {
  emit('login', { email: email.value, password: password.value })
}
</script>
