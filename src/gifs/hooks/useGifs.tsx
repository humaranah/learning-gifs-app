import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// Al tenerlo aquí, se mantiene el caché entre renders y componentes
// const gifCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [prevTerms, setPrevTerms] = useState<string[]>([]);

    // useRef nos permite tener una referencia que persiste entre renders
    // y no provoca re-renders al cambiar su valor
    const gifCache = useRef<Record<string, Gif[]>>({});

    // Al tenerlo aquí, se pierde el caché entre renders y componentes
    // como parte del ciclo de vida del hook
    // const gifCache: Record<string, Gif[]> = {};

    const handleTermClicked = async (term: string) => {
        if (gifCache.current[term]) {
            setGifs(gifCache.current[term]);
            return;
        }
        const gifResults = await getGifsByQuery(term);
        setGifs(gifResults);
        gifCache.current[term] = gifResults;
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0 || prevTerms.findIndex(t => t === query) >= 0)
            return;
        setPrevTerms([query, ...prevTerms].slice(0, 8));

        const gifResults = await getGifsByQuery(query);
        setGifs(gifResults);
        gifCache.current[query] = gifResults;
    }

    return {
        gifs,
        prevTerms,
        handleTermClicked,
        handleSearch
    }
}
