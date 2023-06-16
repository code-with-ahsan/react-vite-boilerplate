import { render, getByTestId, waitFor } from '@testing-library/react';
import { RandomUser } from './RandomUser';
import { vi } from 'vitest';

const mockRandomUserResp = {
  json() {
    return Promise.resolve({
      results: [{
        name: {
          first: 'Muhammad Ahsan',
          last: 'Ayaz'
        }
      }]
    })
  }
}

describe('RandomUser', () => {
  test('should render the random user\'s name correctly', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce(Promise.resolve(mockRandomUserResp))

    const { baseElement } = render(<RandomUser/>);
    const randomUserTextElement = getByTestId(baseElement, 'randomUserText');

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1))
    expect(randomUserTextElement.textContent).toBe('Random User is Muhammad Ahsan Ayaz');
  })
})