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