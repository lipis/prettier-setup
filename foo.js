'use strict';

module.exports = foo => {
  foo.registerTask('bar', () =>
    foo.task.run(['task:open_bar', 'task:close_bar']),
  );
};
