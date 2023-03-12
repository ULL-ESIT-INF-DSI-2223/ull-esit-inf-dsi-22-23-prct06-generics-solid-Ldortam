# Informe de práctica
#### Autora: Laura Dorta Marrero

## Índice
1. [Resumen](#resumen)
2. [Práctica](#práctica)
3. [Modificación](#modificación)
4. [Conclusiones](#conclusiones)
5. [Referencias](#referencias)

## Resumen
<!-- qué se hace y para qu se hace -->
Esta práctica consiste en resolver una serie de ejercicios que nos enseñaran a manejar mejo las clases e interfaces genéricas dellenguaje TypeScript. Al igual que obligarnos a utilizar los principios SOLID de diseño orientados a objetos.

## Práctica
<!-- Explicar desarrollo de la prácica -->
1. [Ejercicio 1](#ejercicio-1)
2. [Ejercicio 2](#ejercicio-2)

### Ejercicio 1

#### Interfaces
##### Streamable.ts
```typescript
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
```
##### Search.ts
```typescript
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
```
#### Clases
##### BasicStreamableCollection
```typescript
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
```
##### SeriesStreamableCollection
###### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {SeriesStreamableCollection} from '../../src/ejercicio-1/SeriesStreamableCollection'

describe ('Interface SeriesStreamableCollection tets', () => {
    it ('Constructor', () => {
        expect(new SeriesStreamableCollection(['S1', 'S2', 'S3'])).not.to.be.equal(null)
    })
    it ('new SeriesStreamableCollection([S1, S2, S3]).addStream(Doc4) returns F4', () => {
        expect(new SeriesStreamableCollection(['S1', 'S2', 'S3']).addStream('S4')).to.be.equal('S4')
    })
    it ('new SeriesStreamableCollection([S1, S2, S3]).getStream(0) returns S1', () => {
        expect(new SeriesStreamableCollection(['S1', 'S2', 'S3']).getStream(0)).to.be.equal('S1')
    })
    it ('new SeriesStreamableCollection([S1, S2, S3]).removeStream(2) returns S3', () => {
        expect(new SeriesStreamableCollection(['S1', 'S2', 'S3']).removeStream(2)).to.be.equal('S3')
    })
    it ('new SeriesStreamableCollection([S1, S2, S3]).getNumberOfStreams() returns 3', () => {
        expect(new SeriesStreamableCollection(['S1', 'S2', 'S3']).getNumberOfStreams()).to.be.equal(3)
    })
    it ('new SeriesStreamableCollection([S1, S2, S3]).search(Doc2) returns [S2]', () => {
        expect(new SeriesStreamableCollection(['S1', 'S2', 'S3']).search('S2')).to.be.eql(['S2'])
    })
})
```

###### SOURCE
```typescript
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Clase SeriesStreamableCollection
 */
export class SeriesStreamableCollection extends BasicStreamableCollection<string> {
    /**
     * Constructor de la clase SeriesStreamableCollection 
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
```
##### FilmsStreamableCollection
###### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {FilmsStreamableCollection} from '../../src/ejercicio-1/FilmsStreamableCollection'

describe ('Interface FilmsStreamableCollection tets', () => {
    it ('Constructor', () => {
        expect(new FilmsStreamableCollection(['F1', 'F2', 'F3'])).not.to.be.equal(null)
    })
    it ('new FilmsStreamableCollection([F1, F2, F3]).addStream(Doc4) returns F4', () => {
        expect(new FilmsStreamableCollection(['F1', 'F2', 'F3']).addStream('F4')).to.be.equal('F4')
    })
    it ('new FilmsStreamableCollection([F1, F2, F3]).getStream(0) returns F1', () => {
        expect(new FilmsStreamableCollection(['F1', 'F2', 'F3']).getStream(0)).to.be.equal('F1')
    })
    it ('new FilmsStreamableCollection([F1, F2, F3]).removeStream(2) returns F3', () => {
        expect(new FilmsStreamableCollection(['F1', 'F2', 'F3']).removeStream(2)).to.be.equal('F3')
    })
    it ('new FilmsStreamableCollection([F1, F2, F3]).getNumberOfStreams() returns 3', () => {
        expect(new FilmsStreamableCollection(['F1', 'F2', 'F3']).getNumberOfStreams()).to.be.equal(3)
    })
    it ('new FilmsStreamableCollection([F1, F2, F3]).search(Doc2) returns [F2]', () => {
        expect(new FilmsStreamableCollection(['F1', 'F2', 'F3']).search('F2')).to.be.eql(['F2'])
    })
})
```
###### SOURCE
```typescript
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Clase FilmsStreamableCollection
 */
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
```
##### DocStreamableCollection
###### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {DocStreamableCollection} from '../../src/ejercicio-1/DocStreamableCollection'

describe ('Interface DocStreamableCollection tets', () => {
    it ('Constructor', () => {
        expect(new DocStreamableCollection(['Doc1', 'Doc2', 'Doc3'])).not.to.be.equal(null)
    })
    it ('new DocStreamableCollection([Doc1, Doc2, Doc3]).addStream(Doc4) returns Doc4', () => {
        expect(new DocStreamableCollection(['Doc1', 'Doc2', 'Doc3']).addStream('Doc4')).to.be.equal('Doc4')
    })
    it ('new DocStreamableCollection([Doc1, Doc2, Doc3]).getStream(0) returns Doc1', () => {
        expect(new DocStreamableCollection(['Doc1', 'Doc2', 'Doc3']).getStream(0)).to.be.equal('Doc1')
    })
    it ('new DocStreamableCollection([Doc1, Doc2, Doc3]).removeStream(2) returns Doc3', () => {
        expect(new DocStreamableCollection(['Doc1', 'Doc2', 'Doc3']).removeStream(2)).to.be.equal('Doc3')
    })
    it ('new DocStreamableCollection([Doc1, Doc2, Doc3]).getNumberOfStreams() returns 3', () => {
        expect(new DocStreamableCollection(['Doc1', 'Doc2', 'Doc3']).getNumberOfStreams()).to.be.equal(3)
    })
    it ('new DocStreamableCollection([Doc1, Doc2, Doc3]).search(Doc2) returns [Doc2]', () => {
        expect(new DocStreamableCollection(['Doc1', 'Doc2', 'Doc3']).search('Doc2')).to.be.eql(['Doc2'])
    })
})
```
###### SOURCE
```typescript
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Clase DocStreamableCollection
 */
export class DocStreamableCollection extends BasicStreamableCollection<string> {
        /**
         * Constructor de la clase DocStreamableCollection
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
```
### Ejercicio 2
#### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {NewArray} from '../../src/ejercicio-2/NewArray'

describe ('Class NewArray<number> tests', () => {
    it ('Método append: NewArray[4, 5, 8, 5, 2, 34, 4] returns ', () => {
        expect(new NewArray([4, 5, 8, 5, 2, 34, 4]).append([2,77,32,111])).to.be.eql([4, 5, 8, 5, 2, 34, 4, 2,77,32,111])
    })
    it ('Método concatenate: NewArray[4, 5, 8, 5, 2, 34, 4] returns ', () => {
        expect(new NewArray([4, 5, 8, 5, 2, 34, 4]).concatenate(343,21,4534,43)).to.be.eql([4, 5, 8, 5, 2, 34, 4, 343,21,4534,43])
    })
    it ('Método filter: NewArray[4, 5, 8, 5, 2, 34, 4] returns ', () => {
        expect(new NewArray([4, 5, 8, 5, 2, 34, 4]).filter(n => n > 10)).to.be.eql([34])
    })
    it ('Método length: NewArray[4, 5, 8, 5, 2, 34, 4] returns ', () => {
        expect(new NewArray([4, 5, 8, 5, 2, 34, 4]).length()).to.be.equal(7)
    })
    it ('Método map: NewArray[4, 5, 8, 5, 2, 34, 4] returns ', () => {
        expect(new NewArray([4, 5, 8, 5, 2, 34, 4]).map(x => x * 2)).to.be.eql([8, 10, 16, 10, 4, 68, 8])
    })
    it ('Método reverse: NewArray[4, 5, 8, 5, 2, 34, 4] returns ', () => {
        expect(new NewArray([4, 5, 8, 5, 2, 34, 4]).reverse()).to.be.eql([4, 34, 2, 5, 8, 5, 4])
    })
})

describe ('Class NewArray<string> tests', () => {
    it ('Método append: NewArray["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"] returns ', () => {
        expect(new NewArray(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"]).append(["Trepar", "wapa"])).to.be.eql(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera", "Trepar", "wapa"])
    })
    it ('Método concatenate: NewArray["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"] returns ', () => {
        expect(new NewArray(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"]).concatenate("you", "tree", "queja")).to.be.eql(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera", "you", "tree", "queja"])
    })
    it ('Método filter: NewArray["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"] returns ', () => {
        expect(new NewArray(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"]).filter(n => n.length >= 5)).to.be.eql(["Estar", "Fuera"])
    })
    it ('Método length: NewArray["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"] returns ', () => {
        expect(new NewArray(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"]).length()).to.be.equal(7)
    })
    it ('Método map: NewArray["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"] returns ', () => {
        expect(new NewArray(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"]).map(x => x + x)).to.be.eql(["HolaHola", "OtraOtra", "EraEra", "DamaDama", "EstarEstar", "RecuRecu", "FueraFuera"])
    })
    it ('Método reverse: NewArray["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"] returns ', () => {
        expect(new NewArray(["Hola", "Otra", "Era", "Dama", "Estar", "Recu", "Fuera"]).reverse()).to.be.eql(["Fuera", "Recu", "Estar", "Dama", "Era", "Otra", "Hola"])
    })
})
```
#### SOURCE
```typescript
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
```
## Modificación
### Interfaces
#### Searchable
```typescript

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

```
#### Collectable
```typescript

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
```
### Clases
#### SearchableCollection
```typescript
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
     * Busca elemento en el array
     * @param toSearch Elemento a buscar
     */
    abstract search(toSearch: T): T[];
}
```
#### StringSearchableCollection
##### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {StringSearchableCollection} from '../../src/ejercicio-mod1/StringSearchableCollection'

describe ('Interface StringSearchableCollection tets', () => {
    it ('Constructor', () => {
        expect(new StringSearchableCollection(['Hola', 'Adiós', 'Buenos'])).not.to.be.equal(null)
    })
    it ('new StringSearchableCollection([Hola, Adiós, Buenos]).addItem(Buenos) returns Buenos', () => {
        expect(new StringSearchableCollection(['Hola', 'Adiós', 'Buenos']).addItem('Buenos')).to.be.equal('Buenos')
    })
    it ('new StringSearchableCollection([Hola, Adiós, Buenos]).getItem(0) returns Hola', () => {
        expect(new StringSearchableCollection(['Hola', 'Adiós', 'Buenos']).getItem(0)).to.be.equal('Hola')
    })
    it ('new StringSearchableCollection([Hola, Adiós, Buenos]).removeItem(2) returns Adiós', () => {
        expect(new StringSearchableCollection(['Hola', 'Adiós', 'Buenos']).removeItem(2)).to.be.equal('Buenos')
    })
    it ('new StringSearchableCollection([Hola, Adiós, Buenos]).getNumberOfItems() returns 3', () => {
        expect(new StringSearchableCollection(['Hola', 'Adiós', 'Buenos']).getNumberOfItems()).to.be.equal(3)
    })
    it ('new StringSearchableCollection([Hola, Adiós, Buenos]).search(Buenos) returns [Buenos]', () => {
        expect(new StringSearchableCollection(['Hola', 'Adiós', 'Buenos']).search('Buenos')).to.be.eql(['Buenos'])
    })
})
```
##### SOURCE
```typescript
import { SearchableCollection } from "./SearchableCollection";

/**
 * Subclase de la abstracta Searchable se tipo string
 */
export class StringSearchableCollection extends SearchableCollection<string>{
    /**
     * Constructor de la clase StringSearchableCollection
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
```
#### NumericSearchableCollection
##### TEST
```typescript
import 'mocha';
import { expect } from 'chai';
import {NumericSearchableCollection} from '../../src/ejercicio-mod1/NumericSearchableCollection'

describe ('Interface NumericSearchableCollection tets', () => {
    it ('Constructor', () => {
        expect(new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4])).not.to.be.equal(null)
    })
    it ('new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).addItem(Buenos) returns Buenos', () => {
        expect(new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).addItem(3)).to.be.equal(3)
    })
    it ('new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).getItem(0) returns Hola', () => {
        expect(new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).getItem(0)).to.be.equal(4)
    })
    it ('new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).removeItem(2) returns Adiós', () => {
        expect(new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).removeItem(2)).to.be.equal(8)
    })
    it ('new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).getNumberOfItems() returns 3', () => {
        expect(new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).getNumberOfItems()).to.be.equal(7)
    })
    it ('new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).search(Buenos) returns [Buenos]', () => {
        expect(new NumericSearchableCollection([4, 5, 8, 5, 2, 34, 4]).search(5)).to.be.eql([1,3])
    })
})
```
##### SOURCE
```typescript
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
```
## Conclusiones
<!-- propuestas de mejoras, con que me quedé al final -->
En conclusión, esta práctica nos trata de eseñar a mejorar a la hora de distribuir nuestro código, a la vez que con Instanbul nos muestra lo útil que realmente son nuestras pruebas.

## Referencias

[Práctica referenciada](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/).

[Estructura básica de proyecto](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-project-setup.html).

[GitHub Pages](https://pages.github.com/).