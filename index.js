'use strict'

const date = new Date()

if (date.getMonth() === 3 && date.getDate() === 1 && Math.floor(Math.random() * 6) + 1 === 1) {
  const message = require('sentencer').make("Unexpected {{ noun }} with {{ an_adjective }} {{ noun }}")

  throw new Error(message)
}
