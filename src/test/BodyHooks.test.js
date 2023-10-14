import { render, screen, fireEvent } from '@testing-library/react';
import BodyHooks from '../components/BodyHooks';

test('renders BodyHooks', () => {
    render(<BodyHooks />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
});

test('renders BodyHooks checks if the value increments by 1 when clicked', () => {
    render(<BodyHooks />);

    const count = screen.getByText('0');
    fireEvent.click(count);
    expect(screen.getByText('1')).toBeInTheDocument();
});

test('renders BodyHooks checks if the value increments by 10 when clicked', () => {
    render(<BodyHooks />);

    const count2 = screen.getByText('10');
    fireEvent.click(count2);
    expect(screen.getByText('20')).toBeInTheDocument();
});