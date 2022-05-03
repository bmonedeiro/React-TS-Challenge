import getImageURL from './getImageURL'

describe('the getImageURL function', () => {
  it('should obtain currency', async () => {
    const imgPath = getImageURL('/abc')
    expect(imgPath).toBe('https://image.tmdb.org/t/p/w500/abc')
  })

  it('should obtain formatted data', async () => {
    const imgPath = getImageURL('')
    expect(imgPath).toBe('https://image.tmdb.org/t/p/w500')
  })
})
