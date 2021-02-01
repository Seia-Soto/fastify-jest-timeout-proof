const { syncScript } = require('..')

describe('server', () => {
  it('should create new server object (inline)', async () => {
    expect.assertions(1)

    const app = syncScript()
    const response = await app.inject({
      method: 'POST',
      url: '/'
    })

    app.close()

    expect(response.statusCode).toBe(404) // NOTE: Bad req;
  })
})
