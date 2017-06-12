'use strict';

module.exports = foo => {
  foo.registerTask('bar', () =>
    foo.task.run(['task:open_bar', 'task:close_bar'])
  );
  const test = [
    'lala',
    'lala',
    'lolo',
    'lele',
    'lala',
    'lala',
    'lolo',
    'lele',
    'lala',
    'lala',
    'lolo',
    'lele',
  ];
  test.lala;
};
