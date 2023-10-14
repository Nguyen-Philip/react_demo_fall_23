import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App checks components', () => {
    render(<App />);

    const Element1 = screen.getByText('Error');
    const Element2 = screen.getByText('Body');
    const Element3 = screen.getByText('BodyHooks');
    const Element4 = screen.getByText('IndexRoute');
    expect(Element1).toBeInTheDocument();
    expect(Element2).toBeInTheDocument();
    expect(Element3).toBeInTheDocument();
    expect(Element4).toBeInTheDocument();
});