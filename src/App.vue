<template>
  <div v-if="!session" class="login-pending">
    <Login @login="handleLogin" />
  </div>
  
  <div v-else class="app-container">
    <SidebarForm v-model:form-data="diplomaData" @logout="handleLogout" @download="downloadDiploma" @print="printDiploma" />
    <main class="preview-area">
      <DiplomaPreview :data="diplomaData" id="diploma-wrapper-capture" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

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

const downloadDiploma = async () => {
  const element = document.getElementById('diploma-wrapper-capture');
  if (!element) return;

  // Render high-res canvas
  const canvas = await html2canvas(element, {
    scale: 3, 
    useCORS: true,
    backgroundColor: '#ffffff'
  });

  const imgData = canvas.toDataURL('image/png');
  
  // A4 Landscape dimensions in mm
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
  pdf.save(`Diploma_${diplomaData.value.nome.replace(/\s+/g, '_')}.pdf`);
}

const printDiploma = () => {
  window.print();
}
</script>
