import { describe, expect, test, afterAll } from "@jest/globals";
import { accessRepo, getEntityById, addEntity, resetAllFakeRepos } from "../src/domains/model";


afterAll(() => resetAllFakeRepos());

test("getting entities from fake repo", () => {
  const entities = accessRepo("User")
  expect(entities).toBeTruthy()
  
});

const user = {
  id: "fakeId",
};
const discussion = {
  id: "fakeId",
  tags: ["hi", "bye"],
  responses: ["hi"]
};

describe("adding to fake repo", () => {
  test("user", () => {

    addEntity("User", user)
    let checkedEntity = getEntityById("User", user.id)
    expect(checkedEntity.id).toBe(user.id)
  });
  test("discussion", () => {
    addEntity("Discussion", discussion)
    let checkedEntity = getEntityById("Discussion", discussion.id)
    expect(checkedEntity.id).toBe(discussion.id)
  });
  test.skip("can't mismatch entities", () => {
    expect(addEntity("User", discussion)).toThrow()

  });

});


