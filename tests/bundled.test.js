const fastify = require('fastify')

describe('server', () => {
  it('should create new server (bundle)', async () => {
    expect.assertions(1)

    const app = fastify()
    const response = await app.inject({
      method: 'POST',
      url: '/'
    })

    app.close()

    expect(response.statusCode).toBe(404) // NOTE: Bad req;
  })
})
