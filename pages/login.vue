<template>
  <v-row justify="center">
    <v-col md="3" class="mx-auto">
      <v-card class="text-center pa-4">
        <v-card-title class="justify-center my-3">
          Welcome to Message Hut
        </v-card-title>
        <v-card-text>
          <v-form ref="usernameForm" @submit.prevent="submitUsernameForm">
            <v-text-field
              counter="20"
              label="Enter your name"
              class="my-4"
              v-model="username"
              :rules="usernameRules"
              required
            >
            </v-text-field>
            <v-btn color="primary" @click="submitUsernameForm">
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
      usernameRules: [
        (v) => !!v || 'Username is required',
        (v) =>
          (v && v.length <= 20) || 'Username must be less than 20 characters',
      ],
    }
  },
  methods: {
    submitUsernameForm() {
      const isValid = this.$refs.usernameForm.validate()

      if (isValid) {
        this.$store.commit('setUsername', this.username)
        this.$router.push('/')
      }
    },
  },
}
</script>