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