const onlySpace = require('./index');

test('(1+1) 一定等于 2 吗，1*1 呢', () => {
    expect(onlySpace('(1+1)一定等于           2吗，1*1呢'))
        .toBe('(1+1) 一定等于 2 吗，1*1 呢');
});

test('HTML, CSS, Javascript 是前端必备的编程语言。', () => {
    expect(onlySpace('HTML,CSS,Javascript是前端必备的编程语言。'))
        .toBe('HTML, CSS, Javascript 是前端必备的编程语言。');
});

test('我是 [abc] 达人，{abc} 哈哈', () => {
    expect(onlySpace('我是[abc]达人，{abc}哈哈'))
        .toBe('我是 [abc] 达人，{abc} 哈哈');
});

