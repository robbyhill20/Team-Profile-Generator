const Manager = require('../lib/Manager');
test('Testing Manager', ()=>{
    const mana = new Manager ('ManagerTest', 1, 'manager@test.com', 'testNumber');
    expect(mana.name).toBe('ManagerTest');
    expect(mana.id).toBe(1);
    expect(mana.email).toBe('manager@test.com');
    expect(mana.officeNumber).toBe('testNumber');
    expect(mana.getName()).toBe('ManagerTest');
    expect(mana.getId()).toBe(1);
    expect(mana.getEmail()).toBe('manager@test.com');
    expect(mana.getOfficeNumber()).toBe('testNumber');
    expect(mana.getRole()).toBe('Manager');
});