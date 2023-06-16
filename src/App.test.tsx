import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should have heading Vite + React', () => {
    render(<App/>)
    const appTitle = screen.getByText(/Vite \+ React/i)
    expect(appTitle).toBeInTheDocument();
  })
})