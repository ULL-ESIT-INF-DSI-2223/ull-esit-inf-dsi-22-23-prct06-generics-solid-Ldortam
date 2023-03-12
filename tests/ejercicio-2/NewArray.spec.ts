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