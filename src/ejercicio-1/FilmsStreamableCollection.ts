import { BasicStreamableCollection } from "./BasicStreamableCollection";


export class FilmsStreamableCollection extends BasicStreamableCollection<string> {
    /**
     * Constructor de la clase FilmsStreamableCollection
     * @param items Array de string
     */
    constructor(protected items: string[]) {
            super(items)
    }
    /**
     * Busca una las cadenas que contenga cierta subcadena
     * @param toSearch Subcadena elegida
     * @returns Colección de cadenas que contengan dichas subcadena
     */
    search(toSearch: string): string[] {
        let result: string[] = []
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            if (element === toSearch) {
                result.push(element);
            }
        }
        return result;
    }
}