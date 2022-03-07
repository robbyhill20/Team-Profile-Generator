const Engineer = require("../lib/Engineer");

test("testing engineer class", () => {
  const eng = new Engineer("engineerTest", 1, "engineer@test.com", "testGit");
  expect(eng.name).toBe("engineerTest");
  expect(eng.id).toBe(1);
  expect(eng.email).toBe("engineer@test.com");
  expect(eng.github).toBe("testGit");
  expect(eng.getName()).toBe("engineerTest");
  expect(eng.getId()).toBe(1);
  expect(eng.getEmail()).toBe("engineer@test.com");
  expect(eng.getGitHub()).toBe("testGit");

  expect(eng.getRole()).toBe("Engineer");
});
