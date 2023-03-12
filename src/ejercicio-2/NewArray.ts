

export class NewArray<T> {

    constructor(protected array: T[]) {
    }

    append(lista2:T[]) {
        for (let i = 0; i < lista2.length; i++) {
            const element = lista2[i];
            this.array.push(element);
        }
        return this.array
    }

    concatenate(...listas: T[]) {
        for (let i = 0; i < listas.length; i++) {
            const element = listas[i];
            this.array.push(element);
        }
        return this.array
    }

    filter(predicate: (result: T) => any) {
        return this.array.filter(predicate);
    }

    length() {
        return this.array.length;
    }

    map(callback: (result: T) => any) {
        return this.array.map(callback);
    }

    reduce(callback: (result: T) => any ) {
        return this.array.reduce(callback, this.array);
    }

    reverse() {
        return this.array.reverse();
    }

    forEach(callback: (result: T) => any) {
        let a = this.array.forEach(callback)
        return a
    }
}