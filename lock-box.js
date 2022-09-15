const pinCode = '8761';
const prompt = require('prompt-sync')({sigint: true});
let userCode = prompt('Enter passcode: ');
if(pinCode === userCode) {
    console.log('Success');
} else{
    console.log('Failure');
}