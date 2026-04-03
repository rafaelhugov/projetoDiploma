<template>
  <aside class="sidebar no-print">
    <header>
      <h1>IPGH</h1>
      <p>Gerador de Diplomas</p>
    </header>

    <form id="diploma-form">
      <div class="form-group">
        <label for="titulo">Título Principal</label>
        <input type="text" id="titulo" v-model="formData.titulo" placeholder="Ex: Diploma">
      </div>

      <div class="form-group">
        <label for="nome">Nome do Homenageado(a)</label>
        <input type="text" id="nome" v-model="formData.nome" placeholder="Nome Completo">
      </div>

      <div class="form-group">
        <label for="ato">Número do Ato (ATO-PRESI nº)</label>
        <input type="text" id="ato" v-model="formData.ato" placeholder="000/2026">
      </div>

      <div class="form-group">
        <label for="data-sessao">Data da Sessão</label>
        <input type="text" id="data-sessao" v-model="formData.dataSessao" placeholder="01 de janeiro de 2026">
      </div>

      <div class="form-group">
        <label for="data-diploma">Data do Diploma</label>
        <input type="text" id="data-diploma" v-model="formData.dataDiploma" placeholder="01 de janeiro de 2026">
      </div>

      <hr>

      <div class="form-group">
        <label for="presidente">Nome do Presidente</label>
        <input type="text" id="presidente" v-model="formData.presidente" placeholder="Nome do Presidente">
      </div>

      <div class="form-group">
        <label for="secretaria">Nome do Secretário(a)</label>
        <input type="text" id="secretaria" v-model="formData.secretaria" placeholder="Nome do Secretário(a)">
      </div>

      <button type="button" class="primary-btn" @click="print">Imprimir / Salvar PDF</button>
    </form>

    <footer>
      <p>&copy; 2026 IPGH - João Pessoa / PB</p>
      <button type="button" class="secondary-btn" @click="$emit('logout')">Sair</button>
    </footer>
  </aside>
</template>

<script setup>
const formData = defineModel('formData')

const print = () => {
  window.print()
}
</script>
