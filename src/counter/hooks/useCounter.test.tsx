import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe('useCounter', () => {
    test('should initialize with default value', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
    });

    test('should initialize with given value', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue);
    });

    test('should increment the counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => result.current.handleAdd());

        expect(result.current.counter).toBe(11);
    });

    test('should decrease the counter when handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => result.current.handleSubtract());

        expect(result.current.counter).toBe(9);
    })

    test('should reset the counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter(5));

        act(() => result.current.handleAdd());
        act(() => result.current.handleAdd());

        expect(result.current.counter).toBe(7);

        act(() => result.current.handleReset());

        expect(result.current.counter).toBe(5);
    })
});