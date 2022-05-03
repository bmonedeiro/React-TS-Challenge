/* eslint-disable  @typescript-eslint/no-explicit-any */
import { act, renderHook } from '@testing-library/react-hooks'

import searchMovies from '@src/services/search'
import { movieMockResponse, errorMockResponse } from '@src/mocks'
import useSearch from '.'

jest.mock('../services/search')
const mockedSearchMovies = searchMovies as jest.Mock<any>

describe('the useSearch hook', () => {
  beforeEach(() => {
    mockedSearchMovies.mockResolvedValue(movieMockResponse)
    jest.clearAllMocks()
  })

  it('should return search result', async () => {
    const { result } = renderHook(() => useSearch('Batman'))
    await act(async () => {
      await mockedSearchMovies()
    })
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error).toBe(null)
    expect(result.current.searchResults).toBe(movieMockResponse)
  })

  it('should throw error ', async () => {
    mockedSearchMovies.mockRejectedValueOnce(errorMockResponse)
    const { result } = renderHook(() => useSearch(''))
    await act(async () => {
      await mockedSearchMovies()
    })
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error?.message).toBe('Error message')
    expect(result.current.searchResults).toBeUndefined()
  })
})
