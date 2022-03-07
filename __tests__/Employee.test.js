const Employee = require("../lib/Employee");

test("Testing Employee", () => {
  const emp = new Employee("BobTester", 1, "bobtest@testing.com");
  expect(emp.name).toBe("BobTester");
  expect(emp.id).toBe(1);
  expect(emp.email).toBe("bobtest@testing.com");
  expect(emp.getName()).toBe("BobTester");
  expect(emp.getId()).toBe(1);
  expect(emp.getEmail()).toBe("bobtest@testing.com");
  expect(emp.getRole()).toBe("Employee");
});
