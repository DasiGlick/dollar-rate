import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Menu from '../src/components/menu';

test("The component is uploaded", () => {
    render(<Menu />);
    const element = screen.getByRole('Box');
    expect(element).toBeInTheDocument();
})
