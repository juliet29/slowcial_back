import { describe, expect, test } from "@jest/globals";
import { User, addUser, getUser, accessRepo } from "../src/domains/model";


test("getEntities", () => {
  const entities = accessRepo("User")
  // console.log(entities)

  expect(entities).toBeTruthy()

});


describe("User", () => {
  test("addUser", () => {
    const user: User = {
      id: "fakeId",
    };

    addUser(user)

    let checkedUser = getUser(user.id)

    expect(checkedUser.id).toBe(user.id)
  });
});
