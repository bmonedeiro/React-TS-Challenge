import MockAdapter from 'axios-mock-adapter';

import { searchMovies } from './search';
import { movieMockResponse } from '../mocks'
import api from './api';

const apiMock = new MockAdapter(api);

describe('services/search', () => {
  it('should searchMovies with the appropriate response', async () => {
    apiMock
      .onGet('search/movie/?query=batman')
      .reply(200, movieMockResponse);

    const response = await searchMovies('batman');
    expect(response).toEqual(movieMockResponse);
  });
});
