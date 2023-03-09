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