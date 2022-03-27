const bufferAlloc = Buffer.alloc(15, 'b');
console.log(bufferAlloc.toString());

const buffer1 = Buffer.from('hello');
console.log(buffer1.toString());

const buffer2 = Buffer.from('world');
console.log(buffer2.toString());

const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);

const bufferString = bufferConcat.toString();

console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
console.log(bufferConcat);
console.log(bufferString);