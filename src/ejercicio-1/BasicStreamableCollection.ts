import { Search } from "./Search";
import { Streamable } from "./Streamable";

/**
 * Clase abstracta BasicStreamableCollection
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>,Search<T> {
    /**
     * Constructor de la clase abstracta SearchableColletion
     * @param items Array de tipo T
     */
    constructor(protected items: T[]) {
    }
    /**
     * Añade un nuevo elemento al Array
     * @param newStream Elemento tipo T a añadir
     * @return Último elemento del array que debería ser el mismo al añadido
     */
    addStream(newStream: T) {
        this.items.push(newStream);
        return this.items[this.items.length - 1]
    }
    /**
     * Muestra un elemento del array
     * @param index Posición del elemento en el array 
     * @returns Elemento en esa posición
     */
    getStream(index: number) {
        return this.items[index];
    }
    /**
     * Elimina elemento del array
     * @param index Posición del elemento
     * @returns Elemento que se eliminó
     */
    removeStream(index: number) {
        let eliminate = this.items.slice(index)
        return eliminate[0]
    }
    /**
     * Da el número de elementos en el array
     * @returns Tamaño del array
     */
    getNumberOfStreams() {
        return this.items.length
    }
    /**
     * Busca elemento en el array
     * @param toSearch Elemento a buscar
     */
    abstract search(toSearch: T): T[];
}