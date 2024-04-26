import { render, screen, cleanup } from '@testing-library/react'
import Header from "./Header";
import ReactDOM from 'react-dom/client';
import React from 'react-dom';

describe('Header Component', () => {
    beforeEach(() => {
        cleanup();
    });

    afterEach(() => {

    })

    test('Has heading using testing library ', () => {
        render(<Header />);
        const element = screen.getByText('Unit Testing');

        expect(element).toBeInTheDocument();
    });
})