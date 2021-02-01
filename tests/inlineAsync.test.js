const { asyncScript } = require('../')

describe('server', () => {
  it('should create new server (inline)', async () => {
    expect.assertions(1)

    const app = await asyncScript()
    const response = await app.inject({
      method: 'POST',
      url: '/'
    })

    app.close()

    expect(response.statusCode).toBe(404) // NOTE: Bad req;
  })
})
