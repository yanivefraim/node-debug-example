import {expect} from 'chai';
import {double} from '../src/app';

describe('app', () => {

  it('should double', () => {
    debugger;
    const r = double(4);
    expect(r).to.equal(8);
  });

});
