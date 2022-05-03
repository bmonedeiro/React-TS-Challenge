import MockAdapter from 'axios-mock-adapter'

import getTrending from './trending'
import { trendMockResponse } from '../mocks'
import api from './api'

const apiMock = new MockAdapter(api)

describe('services/trending', () => {
  it('should getTrending with the appropriate response', async () => {
    apiMock.onGet('trending/all/week').reply(200, trendMockResponse)

    const { results } = await getTrending({ media_type: 'movie', time_window: 'week' })

    expect(results).toEqual(trendMockResponse.results)
  })
})
