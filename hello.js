exports.sayHello = () => {
  const name = process.env.NAME || 'Lambda'
  return `Hello ${name}!`
}
