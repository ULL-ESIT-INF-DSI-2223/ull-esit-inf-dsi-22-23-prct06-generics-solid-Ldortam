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