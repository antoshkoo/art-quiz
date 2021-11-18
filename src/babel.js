async function start() {
  return await Promise.resolve('async baby!');
}
start().then(console.log);

class Util {
  static id = Date.now();
}
console.log('Util:', Util.id);
