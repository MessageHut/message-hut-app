<template>
  <v-app dark>
    <v-main>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="justify-center">
      <span>&copy; Message Hut {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>
