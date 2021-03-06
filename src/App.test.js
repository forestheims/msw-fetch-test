import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.setTimeout(10000);

test('renders fetch title after loading state goes away', async () => {
  render(<App />);
  waitFor(() => {
    expect(screen.findByText(/so fetch/i)).toBeInTheDocument();
  });
});

test('Refactored: renders a loading state that goes away', async () => {
  render(<App />);

});

test('renders fetch title after loading state goes away', async () => {
  render(<App />);
  waitFor(() => {
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });
});

test('Refactored: renders fetch title after loading state goes away', async () => {
  render(<App />);

  });
});
