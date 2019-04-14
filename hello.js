exports.sayHello = () => {
  const name = process.env.NAME || 'Lambda'
  console.log(`Hello ${name}!`)
}
