import MockAdapter from 'axios-mock-adapter'

import getMovie from './movie'
import { movieMockResponse } from '../mocks'
import api from './api'

const apiMock = new MockAdapter(api)

describe('services/movie', () => {
  it('should getMovie with the appropriate response', async () => {
    apiMock.onGet(`movie/${movieMockResponse.id}`).reply(200, movieMockResponse)

    const response = await getMovie(movieMockResponse.id)

    expect(response).toEqual(movieMockResponse)
  })
})
