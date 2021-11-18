async function start() {
  return await Promise.resolve('async baby!')
}
start().then(console.log)
