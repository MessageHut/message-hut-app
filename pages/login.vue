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
              v-model="username"
              counter="20"
              label="Enter your name"
              class="my-4"
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
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'minimal',
  data() {
    const username: string = ''
    const usernameRules: Array<Function> = [
      (v: string) => !!v || 'Username is required',
      (v: string) =>
        (v && v.length <= 20) || 'Username must be less than 20 characters',
    ]
    return {
      username,
      usernameRules,
    }
  },
  computed: {
    usernameForm(): Vue & { validate: () => boolean } {
      return this.$refs.usernameForm as Vue & { validate: () => boolean }
    },
  },
  methods: {
    submitUsernameForm() {
      const isValid: boolean = this.usernameForm.validate()

      if (isValid) {
        this.$store.commit('SET_USERNAME', this.username)
        this.$router.push('/')
      }
    },
  },
})
</script>
