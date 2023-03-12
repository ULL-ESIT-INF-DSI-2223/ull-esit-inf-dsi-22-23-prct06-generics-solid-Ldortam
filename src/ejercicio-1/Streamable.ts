
/**
 * Interfaz Streamable
 */
export interface Streamable<T> {
    /**
     * Recoje un nuevo elemento
     * @param newStream Elemento a guardar en el array
     */
    addStream(newStream: T): T;
    /**
     * Muestra el elemento requerido
     * @param index Posición del elemento en el array
     */
    getStream(index: number): T;
    /**
     * Borra el elemento del array
     * @param index Posición del elemento en el array
     */
    removeStream(index: number): T;
    /**
     * Devuelve el número de elementos en el array
     */
    getNumberOfStreams(): number;
}