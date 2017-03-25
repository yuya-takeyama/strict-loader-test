function foo() {
  bar(true);
}

function bar(arg) {
  if (arg) {
    throw new Error('Fail');
  }
}

module.exports = foo;
