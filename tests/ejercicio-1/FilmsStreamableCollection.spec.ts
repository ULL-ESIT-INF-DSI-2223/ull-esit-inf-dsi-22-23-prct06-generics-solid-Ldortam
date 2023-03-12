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