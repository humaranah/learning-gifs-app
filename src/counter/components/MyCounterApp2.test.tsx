import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";

// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,
        handleSubtract: handleSubtractMock,
    }),
}));

describe("MyCounterApp", () => {
    test("should render the component", () => {
        render(<MyCounterApp />);

        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toContain(`Counter: 20`);

        const buttonAdd = screen.getByRole('button', { name: '+1' });
        expect(buttonAdd).toBeDefined();

        const buttonSubtract = screen.getByRole('button', { name: '-1' });
        expect(buttonSubtract).toBeDefined();

        const buttonReset = screen.getByRole('button', { name: 'Reset' });
        expect(buttonReset).toBeDefined();
    });

    test('should call handleAdd when +1 button is clicked', () => {
        render(<MyCounterApp />);
        const buttonAdd = screen.getByRole('button', { name: '+1' });

        fireEvent.click(buttonAdd);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });
});