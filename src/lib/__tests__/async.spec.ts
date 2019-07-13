// tslint:disable:no-expression-statement
/*
import test from 'ava';
import { asyncABC } from './async';

test('getABC', async t => {
  t.deepEqual(await asyncABC(), ['a', 'b', 'd']);
});
*/

// import test from 'ava';
import { asyncABC } from '../async'

describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', async () => {
    const r = await asyncABC()

    expect(r).toEqual(['a', 'b', 'c'])
  })
})
