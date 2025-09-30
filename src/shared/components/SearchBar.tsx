import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeHolder?: string;
    onQuery: (term: string) => void;
}

export const SearchBar = ({ placeHolder = 'Buscar', onQuery }: Props) => {

    const [query, setQuery] = useState('');

    // Se ejecuta cada vez que cambia 'query' o 'onQuery'
    // El timeout se limpia si el componente se desmonta
    // o antes de la siguiente ejecución del efecto
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700)

        // Se ejecuta al desmontar el componente o antes de la siguiente ejecución del efecto
        return () => {
            clearTimeout(timeoutId);
        }
    }, [query, onQuery])

    const handleSearch = () => {
        onQuery(query);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeHolder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
