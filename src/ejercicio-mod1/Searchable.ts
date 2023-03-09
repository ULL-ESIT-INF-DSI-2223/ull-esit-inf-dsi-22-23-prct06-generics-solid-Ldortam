
/**
 * Interfaz Searchable
 */
export interface Searchable<T> {
    /**
     * Busca elemento en el array
     * @param toSearch Elemento a buscar
     */
    search(toSearch: T): T[];
}

