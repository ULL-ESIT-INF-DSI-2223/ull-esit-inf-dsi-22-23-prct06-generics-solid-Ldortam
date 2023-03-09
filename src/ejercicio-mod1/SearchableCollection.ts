import { Collectable } from "./Collectable";
import { Searchable } from "./Searchable";
/**
 * Clase abstracta Searchable collection
 */
export abstract class SearchableCollection<T> implements Searchable<T>,Collectable<T> {
    /**
     * Constructor de la clase abstracta SearchableColletion
     * @param items Array de tipo T
     */
    constructor(protected items: T[]) {    
    }
    /**
     * Añade un nuevo elemento al Array
     * @param newItem Elemento tipo T a añadir
     * @return Último elemento del array que debería ser el mismo al añadido
     */
    addItem(newItem: T) {
        this.items.push(newItem)
        return this.items[this.items.length - 1]
    }
    /**
     * Muestra un elemento del array
     * @param index Posición del elemento en el array 
     * @returns Elemento en esa posición
     */
    getItem(index: number) {
        return this.items[index]
    }
    /**
     * Elimina elemento del array
     * @param index Posición del elemento
     * @returns Elemento que se eliminó
     */
    removeItem(index: number) {
        let eliminate = this.items.slice(index)
        return eliminate[0]
    }
    /**
     * Da el número de elementos en el array
     * @returns Tamaño del array
     */
    getNumberOfItems() {
        return this.items.length;
    }
    /**
     * Vusca elemento en el array
     * @param toSearch Elemento a buscar
     */
    abstract search(toSearch: T): T[];
}