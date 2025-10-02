import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
    test('should render the component', () => {
        render(<MyCounterApp />);

        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toContain(`Counter: 5`);

        const buttonAdd = screen.getByRole('button', { name: '+1' });
        expect(buttonAdd).toBeDefined();

        const buttonSubtract = screen.getByRole('button', { name: '-1' });
        expect(buttonSubtract).toBeDefined();

        const buttonReset = screen.getByRole('button', { name: 'Reset' });
        expect(buttonReset).toBeDefined();
    });

    test('should increment the counter', async () => {
        render(<MyCounterApp />);

        const h1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(h1.innerHTML).toContain(`Counter: 6`);
    });

    test('should decrement the counter', async () => {
        render(<MyCounterApp />);

        const h1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '-1' });

        fireEvent.click(button);

        expect(h1.innerHTML).toContain(`Counter: 4`);
    });
});