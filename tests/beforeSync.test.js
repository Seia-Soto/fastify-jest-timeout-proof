const { syncScript } = require('..')

describe('server', () => {
  let app

  beforeAll(() => {
    app = syncScript()
  })
  afterAll(() => {
    app.close()
    app = null
  })

  it('should create new server (inline)', async () => {
    expect.assertions(1)

    const response = await app.inject({
      method: 'POST',
      url: '/'
    })

    expect(response.statusCode).toBe(404) // NOTE: Bad req;
  })
})
