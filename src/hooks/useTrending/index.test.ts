import { act, renderHook } from '@testing-library/react-hooks';

import { getTrending } from '@src/services/trending';
import useTrending from '../useTrending';
import { trendMockResponse, errorMockResponse } from '@src/mocks'

jest.mock('../services/trending')
const mockedGetTrending = getTrending as jest.Mock<any>;

describe('the useTrending hook', () => {
  beforeEach(() => {
    mockedGetTrending.mockResolvedValue(trendMockResponse);
    jest.clearAllMocks();
  })

  it('should return trends', async () => {
    const { result } = renderHook(() => useTrending());
    await act(async () => {
      await mockedGetTrending();
    });
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error).toBe(null)
    expect(result.current.trends).toBe(trendMockResponse.results)
  });

  it('should throw error ', async () => {
    mockedGetTrending.mockRejectedValueOnce(errorMockResponse);
    const { result } = renderHook(() => useTrending());
    await act(async () => {
      await mockedGetTrending();
    });
    expect(result.current.isFetching).toBeFalsy()
    expect(result.current.error?.message).toBe('Error message')
    expect(result.current.trends).toStrictEqual([])
  });

});
