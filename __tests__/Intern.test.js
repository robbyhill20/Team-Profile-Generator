const Intern = require('../lib/Intern');

test('Does Intern Work', ()=>{
    const int = new Intern ('interTest', 1, 'inter@test.com', 'testSchool')
    expect(int.name).toBe('interTest');
    expect(int.id).toBe(1);
    expect(int.email).toBe('inter@test.com');
    expect(int.school).toBe('testSchool');
    expect(int.getName()).toBe('interTest');
    expect(int.getId()).toBe(1);
    expect(int.getEmail()).toBe('inter@test.com');
    expect(int.getSchool()).toBe('testSchool');

    expect(int.getRole()).toBe('Intern');
});
