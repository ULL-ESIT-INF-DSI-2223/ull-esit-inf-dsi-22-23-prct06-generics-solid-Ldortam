
/**
 * Clase NewArray
 */
export class NewArray<T> {
    /**
     * Constructor de la clase NewArray
     * @param array Array de tipo T de la clase
     */
    constructor(protected array: T[]) {
    }
    /**
     * Añade la segunda lista al final del array de la clase
     * @param lista2 lista de tipo T
     * @returns Combinación de las listas
     */
    append(lista2:T[]) {
        for (let i = 0; i < lista2.length; i++) {
            const element = lista2[i];
            this.array.push(element);
        }
        return this.array
    }
    /**
     * Concatenar distintas listas
     * @param listas conjuntos de listas
     * @returns Lista conjunta
     */
    concatenate(...listas: T[]) {
        for (let i = 0; i < listas.length; i++) {
            const element = listas[i];
            this.array.push(element);
        }
        return this.array
    }
    /**
     * Filtra según el predicado lógico
     * @param predicate Condición a cumplir
     * @returns Lista con los elementos que cumplen el predicado
     */
    filter(predicate: (result: T) => any) {
        return this.array.filter(predicate);
    }
    /**
     * Muestra el tamaño del array
     * @returns el número de elementos del array de la clase
     */
    length() {
        return this.array.length;
    }
    /**
     * Modifica la lista según la función que da
     * @param callback Función que modifica el array
     * @returns Lista modificada
     */
    map(callback: (result: T) => any) {
        return this.array.map(callback);
    }
    /**
     * Reduce cada elemento al acumulador utilizando la función
     * @param callback Función a utilizar
     * @returns Lista modificada
     */
    reduce(callback: (result: T) => any ) {
        return this.array.reduce(callback, this.array);
    }
    /**
     * Le da la vuelta a la lista
     * @returns Lista revertida
     */
    reverse() {
        return this.array.reverse();
    }
    /**
     * Modifa elemento a elemento segun la función introducida
     * @param callback Función que dirige que hacer con los elementos
     * @returns Lista modificada
     */
    forEach(callback: (result: T) => any) {
        let a = this.array.forEach(callback)
        return a
    }
}