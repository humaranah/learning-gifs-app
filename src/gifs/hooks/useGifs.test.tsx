import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import type { Gif } from "../interfaces/gif.interface";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

import { gifsMock } from '../../../tests/mocks/gifs.data';

describe('useGifs', () => {
    vi.mock('../actions/get-gifs-by-query.action', () => ({
        getGifsByQuery: async (query: string): Promise<Gif[]> => {
            if (query === 'cats') {
                return gifsMock;
            }
            return [];
        }
    }));

    test('should reteurn default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        var { gifs, prevTerms, handleSearch, handleTermClicked } = result.current;
        expect(gifs.length).toBe(0);
        expect(prevTerms.length).toBe(0);
        expect(handleSearch).toBeDefined();
        expect(handleTermClicked).toBeDefined();
    });

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(() => result.current.handleSearch('cats'));

        var { gifs, prevTerms } = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(prevTerms.length).toBe(1);
        expect(prevTerms[0]).toBe('cats');
    });

    test('should return a list of gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());

        await act(() => result.current.handleTermClicked('cats'));

        var { gifs } = result.current;
        expect(gifs.length).toBeGreaterThan(0);
    });

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(() => result.current.handleSearch('cats'));

        var { gifs } = result.current;
        expect(gifs.length).toBeGreaterThan(0);

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('This function should not be called'));

        await act(() => result.current.handleSearch('cats'));

        expect(gifs.length).toBeGreaterThan(0);
    });

    test('should not return more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());
        const expectedTerms = ['term9', 'term8', 'term7', 'term6', 'term5', 'term4', 'term3', 'term2'];

        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

        for (let i = 1; i <= 9; i++) {
            await act(() => result.current.handleSearch(`term${i}`));
        }

        var { prevTerms } = result.current;
        expect(prevTerms.length).toBe(8);
        expect(prevTerms).toEqual(expectedTerms);
    });
});