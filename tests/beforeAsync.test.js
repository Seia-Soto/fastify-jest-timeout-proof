const { asyncScript } = require('../')

describe('server', () => {
  let app

  beforeAll(() => {
    return new Promise((resolve, reject) => {
      asyncScript()
        .then(server => {
          app = server
        })
    })
  })
  afterAll(() => {
    app.close()
    app = null
  })

  it('should create new server', async () => {
    expect.assertions(1)

    const response = await app.inject({
      method: 'POST',
      url: '/'
    })

    expect(response.statusCode).toBe(404) // NOTE: Bad req;
  })
})
