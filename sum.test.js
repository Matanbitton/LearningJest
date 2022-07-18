const module = require("./sum");
const sum = module.sum;
const capitalize = module.capitalize;
const reverseString = module.reverseString;

// this test uses the expect and toBe syntax that
test("add 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// Matchers

// this is testing using exact equality
test("two plus two is four", () => {
  /* returns an expectation object*/ expect(2 + 2) /*Matcher (uses Object.is) */
    .toBe(4);
});

//this is testing using value like ==
test("two plus two is four", () => {
  expect(2 + 2).toEqual(4);
});

//another example of testing using value
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//Truthiness

test("null", () => {
  const n = null;
  expect(n).toBeNull(); // matches only null
  expect(n).toBeDefined(); //matches only defined
  expect(n).not.toBeUndefined(); //toBeUndefined matches only undefined
  expect(n).not.toBeTruthy(); //matches to false because of the not
  expect(n).toBeFalsy(); // matches only to false statements
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//Numbers

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // true it is greater
  expect(value).toBeGreaterThanOrEqual(3.5); // true it is greater
  expect(value).toBeGreaterThanOrEqual(4); // true it is equal
  expect(value).toBeLessThan(5); // true it is less than 5
  expect(value).toBeLessThanOrEqual(4.5); // true it is less than 5

  //toBe and toEqual are equivalent for numbers
  expect(value).toBe(4); // 4 === 4 (not precisly the same be object.is works differently)
  expect(value).toEqual(4); // 4 == 4
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// Strings

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

test("the shopping list has milk on it", () => {
  const shoppingList = [
    "diapers",
    "football",
    "trash bags",
    "paper towels",
    "milk",
  ];
  expect(shoppingList).toContain("milk");
  expect(shoppingList).not.toContain("pizza");
});

//Exceptions you can test if a function threw an error when it was called

function dummyFunc() {
  throw new Error("oops a mistake was made here");
}

test("test if dummy threw error", () => {
  expect(() => dummyFunc()).toThrow();
  expect(() => dummyFunc()).toThrow(Error);

  // check for a specific eror
  expect(() => dummyFunc()).toThrow("oops a mistake was made here");
});

test("capitalize first character", () => {
  expect(capitalize("horse")).toBe("Horse");
});

test("reverse string", () => {
  expect(reverseString("toast")).toMatch("tsaot");
});
