import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { fireEvent } from '@testing-library/react/dist/pure';

test('home work as expected', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    const button = await screen.findByRole('button')
    fireEvent.change(input, { target: { value: 'matrix' } })
    fireEvent.click(button)

    const title = await screen.findByText('matrix')
    expect(title).toBeVisible()
});
