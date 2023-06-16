import { render, getByTestId, act } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should increase the count when the button is clicked', () => {
    const { baseElement } = render(<Counter/>);
    const countButtonElement = getByTestId(baseElement, 'countButton');
    act(() => {
      countButtonElement.click();
      countButtonElement.click();
      countButtonElement.click();
      countButtonElement.click();
    })
    expect(countButtonElement.textContent).toBe('count is 4');
  })
})