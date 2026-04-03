<template>
  <div id="diploma-wrapper" class="diploma-wrapper">
    <img src="/bg.png" alt="Diploma Background" class="bg-img">

    <div class="content-overlay">
      <h2 class="diploma-title">{{ data.titulo }}</h2>

      <div class="main-text">
        A Diretoria do Instituto Paraibano de Genealogia e Heráldica - IPGH, de acordo com as
        disposições estatutárias e regimentais, os termos do ATO-PRESI nº <span>{{ data.ato }}</span> e acolhendo a decisão proferida pelo plenário na sessão do dia
        <span>{{ data.dataSessao }}</span>, outorga este diploma para o(a) senhor(a):
      </div>

      <div class="recipient-name">{{ data.nome }}</div>

      <div class="sub-text">
        Para que possa gozar dos direitos e prerrogativas estabelecidos nos dispositivos que regem o seu normativo interno.
      </div>

      <div class="date-line">
        João Pessoa/PB, <span>{{ data.dataDiploma }}</span>
      </div>

      <div class="signatures">
        <div class="signature-box left">
          <div class="sig-name">{{ data.presidente }}</div>
          <div class="sig-label">{{ data.presidente }}</div>
        </div>
        <div class="signature-box right">
          <div class="sig-name">{{ data.secretaria }}</div>
          <div class="sig-label">{{ data.secretaria }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
