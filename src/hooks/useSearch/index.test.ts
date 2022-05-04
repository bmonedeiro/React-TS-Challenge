/* eslint-disable  @typescript-eslint/no-explicit-any */
import { act, renderHook } from '@testing-library/react-hooks'

import searchMovies from '@src/services/search'
import { searchMockResponse, errorMockResponse, movieMockResponse } from '@src/mocks'
import useDebounce from '@src/hooks/useDebounce'
import useSearch from '.'

jest.mock('@src/services/search')
const mockedSearchMovies = searchMovies as jest.Mock<any>

jest.mock('@src/hooks/useDebounce')
const mockUseDebounce = useDebounce as jest.Mock<any>
mockedSearchMovies.mockResolvedValue(searchMockResponse)

describe('the useSearch hook', () => {
  beforeEach(() => {
    mockedSearchMovies.mockResolvedValue(searchMockResponse)
    jest.clearAllMocks()
  })

  it('should return search result', async () => {
    mockUseDebounce.mockImplementationOnce(() => () => 'Batman')
    const { result } = renderHook(() => useSearch('Batman'))
    await act(async () => {
      await mockedSearchMovies()
    })

    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error).toBe(null)
    expect(result.current.searchResults).toStrictEqual([movieMockResponse])
  })

  it('should throw error ', async () => {
    mockedSearchMovies.mockRejectedValueOnce(errorMockResponse)
    const { result } = renderHook(() => useSearch('/'))
    await act(async () => {
      await mockedSearchMovies()
    })
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error?.message).toBe('Error message')
    expect(result.current.searchResults).toBeUndefined()
  })
})
