<template>
  <v-row justify="center">
    <v-col md="3" class="mx-auto">
      <v-card class="text-center pa-4">
        <v-card-title class="justify-center my-3">
          Welcome to Message Hut
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              counter="20"
              label="Enter your name"
              class="my-4"
              v-model="username"
            >
            </v-text-field>
            <v-btn color="primary" @click="handleStartMessagingButtonClick">
              Start messaging
              <v-icon right>mdi-arrow-right-bold</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: 'minimal',
  data() {
    return {
      username: '',
    }
  },
  methods: {
    handleStartMessagingButtonClick() {
      this.$store.commit('setUsername', this.username)
    },
  },
}
</script>