import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

test('renders Nav components', () => {
    render(<Nav />);

    const Element1 = screen.getByText('Error');
    const Element2 = screen.getByText('Body');
    const Element3 = screen.getByText('BodyHooks');
    const Element4 = screen.getByText('IndexRoute');
    expect(Element1).toBeInTheDocument();
    expect(Element2).toBeInTheDocument();
    expect(Element3).toBeInTheDocument();
    expect(Element4).toBeInTheDocument();
});