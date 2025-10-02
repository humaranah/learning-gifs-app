import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
    test('should render correctly', () => {
        render(<SearchBar onQuery={() => { }} />);

        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery with the correct value after 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        // await new Promise((r) => setTimeout(r, 700));
        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledWith('test');
        })
    });

    test('should call only once with the last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        for (const char of 'test') {
            fireEvent.change(input, { target: { value: char } });
        }

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('t');
        });
    });

    test('should call onQuery when button click with input value', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    });

    test('should input has the correct placeholder', () => {
        const placeholder = 'Search...';

        render(<SearchBar placeholder={placeholder} onQuery={() => { }} />);

        expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
    });
});