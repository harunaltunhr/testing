// psst.  use JS Tutor & the debugger!

const array1 = ['f'];
const array2 = array1;

const test1 = array1 === array2;
console.assert(test1, 'Test 1');

const test2a = array1[0] === 'f';
const test2b = array2[0] === 'f';
console.assert(test2a && test2b, 'Test 2');

