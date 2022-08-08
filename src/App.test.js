import {render, screen} from '@testing-library/react'
import App from './App';

test('renders My Agora States header', () => {
    render(<App />);
    const headerElement = screen.getByText(/my agora states/i);
    expect(headerElement).toBeInTheDocument
})