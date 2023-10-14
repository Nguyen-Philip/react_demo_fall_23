import { render, screen } from '@testing-library/react';
import IndexRoute from '../components/IndexRoute';

test('renders IndexRoute checks carousel', () => {
    render(<IndexRoute />);

    const activeImage1 = screen.getByAltText('Test1');
    expect(activeImage1).toBeInTheDocument();
    const activeImage2 = screen.getByAltText('Test2');
    expect(activeImage2).toBeInTheDocument();
    const activeImage3 = screen.getByAltText('Test3');
    expect(activeImage3).toBeInTheDocument();
});
