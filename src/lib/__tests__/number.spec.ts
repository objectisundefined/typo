// tslint:disable:no-expression-statement
/*
import test from 'ava';
import { double, power } from './number';

test('double', t => {
  t.is(double(2), 4);
});

test('power', t => {
  t.is(power(2, 4), 16);
});
*/

import { double, power } from '../number'

describe('number test', () => {
  it('double works', () => {
    expect(double(2)).toEqual(4)
  })

  it('power works', () => {
    expect(power(2, 4)).toEqual(16)
  })
})
