import { logStuff } from '@sample/sample';

console.log('Hello world !!');

setInterval(() => {
    logStuff({someProperty:'someValue'})
}, 1000)