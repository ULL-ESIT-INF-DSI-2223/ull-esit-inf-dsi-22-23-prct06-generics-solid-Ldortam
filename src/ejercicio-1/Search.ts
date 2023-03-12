/**
 * Interfaz Search
 */
export interface Search<T> {
    /**
     *Busca elemento en el array
     * @param toSearch Elemento a buscar
     */
     search(toSearch: T): T[];
}