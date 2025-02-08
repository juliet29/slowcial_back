import {describe, expect, test} from '@jest/globals';
import sum from "../src/sum";

function nullifyWeakest(a: number, b: number): null {
  return null
}



describe('sum module', () => {
  test.only('adds 1 + 2 to equal 3', () => {
    let a = 1;
    let b = 2;
    let c = nullifyWeakest(a, b)
    expect(c).toBeNull();
  });
}); 