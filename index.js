function greeter(name) {
  return `Hello ${name ?? 'there'}!`
}

module.exports = greeter