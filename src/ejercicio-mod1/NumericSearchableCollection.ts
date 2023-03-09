import { SearchableCollection } from "./SearchableCollection";

/**
 * Subclase de la abstracta Searchable se tipo numérica
 */
export class NumericSearchableCollection extends SearchableCollection<number>{
    /**
     * Constructor de la clase StringSearchableCollection
     * @param items Array de números
     */
    constructor(protected items: number[]) {
        super(items)
    }
    /**
     * Busca el número en el array
     * @param toSearch Número a buscar
     * @returns Colección de posiciones donde se encuentra ese número en el array
     */
    search(toSearch: number): number[] {
        let result: number[] = []
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            if (element === toSearch) {
                result.push(i);
            }
        }
        return result;
    }
}