// const buffer = Buffer.from('Node.js', 'utf-8'); // создание объекта буфера
const buffer = Buffer.alloc(256); // еще один способ создания объекта буфера
console.log(buffer.toString());
// buffer[0] = 69;
// buffer.write('E');
// console.log(buffer.toString());
console.log(buffer.length);