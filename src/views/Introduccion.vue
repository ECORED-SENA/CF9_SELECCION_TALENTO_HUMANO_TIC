<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white i
      h1 Introducción   

    .bloque-texto-a.bt_clr_01.p-3.p-md-3.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/intro/intro.png", alt="alt").m-auto.img350
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 #[span.bold_purple Bienvenido a este proceso de aprendizaje]. Se le invita a ver el siguiente video, el cual presenta una introducción a la temática a estudiar en el presente componente formativo: #[span.bold_purple la planificación del proceso de reclutamiento o atracción de candidatos].
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video   
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
