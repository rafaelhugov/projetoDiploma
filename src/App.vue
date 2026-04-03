<template>
  <div v-if="!session" class="login-pending">
    <Login @login="handleLogin" />
  </div>
  
  <div v-else class="app-container">
    <SidebarForm v-model:form-data="diplomaData" @logout="handleLogout" />
    <main class="preview-area">
      <DiplomaPreview :data="diplomaData" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

import Login from '@/components/Login.vue'
import SidebarForm from '@/components/SidebarForm.vue'
import DiplomaPreview from '@/components/DiplomaPreview.vue'

const session = ref(null)

const diplomaData = ref({
  titulo: 'Diploma',
  nome: 'Nome do Homenageado(a)',
  ato: '001/2026',
  dataSessao: '22 de março de 2026',
  dataDiploma: '02 de abril de 2026',
  presidente: 'Presidência do IPGH',
  secretaria: 'Secretaria do IPGH'
})

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

const handleLogin = async ({ email, password }) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    alert('Erro no login: ' + error.message)
  }
}

const handleLogout = async () => {
  await supabase.auth.signOut()
}
</script>
