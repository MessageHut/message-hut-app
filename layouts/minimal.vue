<template>
  <v-app dark>
    <v-main>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-main>

    <the-footer />
  </v-app>
</template>

<script lang="ts">
import TheFooter from '~/components/layout/TheFooter.vue'

export default {
  components: { TheFooter },
}
</script>
