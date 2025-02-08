import { describe, expect, test } from "@jest/globals";
import { User, addUser, getUser } from "../src/domains/model";
import createDiscussion from "../src/services/services";

const users: Map<string, User> = new Map();


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
