const greeter = require(".")

test('it should greet the user', () => {
  expect(greeter('Mateus')).toBe('Hello Mateus!')
})

test('it should return a default message when no name is passed', () => {
  expect(greeter()).toBe('Hello there!')
})