
/**
 * Interfaz Collectable
 */
export interface Collectable<T> {
    /**
     * Recoje un nuevo item 
     * @param newItem Item a guardar en el array
     */
    addItem(newItem: T): T;
    /**
     * Muestra el item requerido
     * @param index Posición del item en el array
     */
    getItem(index: number): T;
    /**
     * Borra item del array
     * @param index Posición del item en el array
     */
    removeItem(index: number): T;
    /**
     * Devuelve el número de items en el array
     */
    getNumberOfItems(): number;
}
