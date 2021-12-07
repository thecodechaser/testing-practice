const {stringLength, reverseString} = require("./js/string");

test("String has 5 characters", () => {
  expect(stringLength("Hello")).toBe(5);
});

test("Returned string is teejnaR", () => {
  expect(reverseString("Ranjeet")).toBe("teejnaR");
});
