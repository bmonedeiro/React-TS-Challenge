/* eslint-disable  @typescript-eslint/no-explicit-any */
import { act, renderHook } from '@testing-library/react-hooks'

import getMovie from '@src/services/movie'
import { movieMockResponse, errorMockResponse } from '@src/mocks'
import useMovie from '.'

jest.mock('../services/movie')
const mockedGetTrending = getMovie as jest.Mock<any>

describe('the useMovie hook', () => {
  beforeEach(() => {
    mockedGetTrending.mockResolvedValue(movieMockResponse)
    jest.clearAllMocks()
  })

  it('should return movie', async () => {
    const { result } = renderHook(() => useMovie(movieMockResponse.id))
    await act(async () => {
      await mockedGetTrending()
    })
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error).toBe(null)
    expect(result.current.movie).toBe(movieMockResponse)
  })

  it('should throw error ', async () => {
    mockedGetTrending.mockRejectedValueOnce(errorMockResponse)
    const { result } = renderHook(() => useMovie(movieMockResponse.id))
    await act(async () => {
      await mockedGetTrending()
    })
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error?.message).toBe('Error message')
    expect(result.current.movie).toBeUndefined()
  })
})
