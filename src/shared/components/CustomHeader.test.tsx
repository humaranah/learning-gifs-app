import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
    const title = 'Test title';

    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />);

        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toBe(title);
    });

    test('should render the description when provided', () => {
        const description = 'Test description';

        render(<CustomHeader title={title} description={description} />);

        const p = screen.getByRole('paragraph');
        expect(p.innerHTML).toBe(description);
    });

    test('should not render the description when not provided', () => {
        render(<CustomHeader title={title} />);

        const p = screen.queryByRole('paragraph');
        expect(p).toBeNull();
    });
});