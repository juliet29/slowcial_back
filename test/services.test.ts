import {describe, expect, test} from '@jest/globals';
import { User, Discussion } from "../src/domains/model";
import createDiscussion from "../src/services/services"

describe('createDiscussion', () => {
  test('isTruthy', () => {
    const user:User = {
      id: "fakeId"
    }
    const discussion:Discussion = {
      tags: ["hi", "bye"],
      responses: ["hi", "bye"]
    }
    
    expect(createDiscussion(user, discussion)).toBe(false)
  })
})

