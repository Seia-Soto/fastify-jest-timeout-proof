import fastify from 'fastify'

const asyncScript = async () => {
  const server = fastify()

  return server
}
const syncScript = () => {
  const server = fastify()

  return server
}

export {
  asyncScript,
  syncScript
}
