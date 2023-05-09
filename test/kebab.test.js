const { helloKebab } = require("..");
const { it, describe } = require("node:test");
const assert = require("node:assert/strict");

describe("Kebab greeter", () => {
  it("greets in kebab-case", () => {
    assert.equal(helloKebab("good lookin"), "hello-good-lookin");
  });

  it("greets the world when name not provided", () => {
    assert.equal(helloKebab(), "hello-world");
  });
});
