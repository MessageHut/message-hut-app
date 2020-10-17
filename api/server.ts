import express from 'express'
import consola from 'consola'
import config from '../nuxt.config'
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = 'localhost'
const port = 3000

async function start(): Promise<void> {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Make sure to wait for Nuxt to load @nuxt/typescript-build before proceeding
  await nuxt.ready()

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.get('*', nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
