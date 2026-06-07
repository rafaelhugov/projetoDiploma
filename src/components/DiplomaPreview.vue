<template>
  <div id="diploma-wrapper" :class="['diploma-wrapper', { 'long-text': isLongText }]">
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
        <template v-if="data.tipo === 'colegiado'">
          Que passará a ocupar a Cadeira nº <span>{{ data.cadeira }}</span>, que tem como Patrono(a) <span>{{ data.patrono }}</span>, para que possa gozar dos direitos e prerrogativas estabelecidos nos dispositivos que regem o seu normativo interno.
        </template>
        <template v-else>
          Para que possa gozar dos direitos e prerrogativas estabelecidos nos dispositivos que regem o seu normativo interno.
        </template>
      </div>

      <div class="date-line">
        João Pessoa/PB, <span>{{ data.dataDiploma }}</span>
      </div>

      <div class="signatures">
        <div class="signature-box left">
          <div class="sig-name">{{ data.presidente }}</div>
          <div class="sig-label">Presidência do IPGH</div>
        </div>
        <div class="signature-box right">
          <div class="sig-name">{{ data.secretaria }}</div>
          <div class="sig-label">Secretaria do IPGH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const isLongText = computed(() => {
  const patronoLength = props.data.tipo === 'colegiado' && props.data.patrono ? props.data.patrono.length : 0
  const cadeiraLength = props.data.tipo === 'colegiado' && props.data.cadeira ? props.data.cadeira.length : 0
  const nomeLength = props.data.nome ? props.data.nome.length : 0
  
  // Se o patrono for longo ou o nome for longo, ativa a classe de layout expandido
  return (patronoLength + cadeiraLength) > 25 || nomeLength > 28
})
</script>
