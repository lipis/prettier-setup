module.exports = foo => {
  foo.registerTask('bar', () =>
    foo.task.run(['task:open_bar', 'task:close_bar']),
  );
  const test = ['foo', 'bar', 'hello', 'world'];
  console.log(test);
};
